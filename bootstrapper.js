// load instrumentation!
if (process.env['NEW_RELIC_LICENSE_KEY']) {
    require('newrelic');
}

// launch the server!
var server = require('./server/app');
server();
