module.exports = function () {
    var express = require('express'),
        compress = require('compression'),
        path = require('path'),
        fs = require('fs'),
        path = require('path'),
        app = express();

    var styles = fs.readFileSync(path.join(__dirname, '../build/style.css'), {encoding: 'utf8'});

    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    // Zip the things
    app.use(compress());

    app.use("/public/stylesheets/", express.static(path.join(__dirname , "../build")));
    app.use("/public/js/", express.static(path.join(__dirname , "../build")));
    app.use("/public", express.static(__dirname + "/public"));
    app.use("/public/components", express.static(path.join(__dirname, "../components")));
    app.use("/public/fonts/", express.static(path.join(__dirname , "../components/fontawesome/fonts")));

    app.disable('x-powered-by');
    app.get('/', function (req, res) {
        res.render('index/index', {
            host: req.host,
            style: styles
        });
    });
    var port = Number(process.env.PORT || 5000);
    console.log('express is booting on port ' + port);
    app.listen(port);
};
