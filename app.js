var express = require('express'),
	lessMiddleware = require('less-middleware'),
	path = require('path'),
	app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(lessMiddleware(path.join('', __dirname, 'stylesheets'),{
    dest   : __dirname,
  	preprocess: {
    	path: function(pathname, req) {
      		return pathname.replace('/public/stylesheets', '');
    	}
  	}
  }));

app.use("/public", express.static(__dirname + "/public"));
app.disable('x-powered-by');

app.get('/', function(req, res){
	res.render('index/index');
});

var port = Number(process.env.PORT || 5000);
app.listen(port);
