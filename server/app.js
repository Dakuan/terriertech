module.exports = function () {
    var express = require('express'),
        lessMiddleware = require('less-middleware'),
        path = require('path'),
        app = express();

    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    // app.use("/public/javascripts", express.static(path.join(__dirname, "../client")));


    var uglifyMiddleware = require('express-uglify-middleware');

    app.use(uglifyMiddleware({
        src: path.join('', __dirname, '../client'),
        dest: path.join('', __dirname, '/public/javascripts'),
        prefix: "/public/javascripts",
        compressFilter: /\.js$/,
        compress: true,
        force: false,
    }));

    app.use(lessMiddleware(path.join('', __dirname, '../stylesheets'), {
        dest: __dirname,
        preprocess: {
            path: function (pathname, req) {
                return pathname.replace('/public/stylesheets', '');
            }
        }
    }));
    app.use("/public", express.static(__dirname + "/public"));
    app.disable('x-powered-by');
    app.get('/', function (req, res) {
        res.render('index/index');
    });
    var port = Number(process.env.PORT || 5000);
    console.log('express is booting on port ' + port);
    app.listen(port);
};
