window.$ = require('jquery');
window.jQuery = window.$;
window._ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = window.$;

var TechSection = require('./views/tech-section'),
    ContactSection = require('./views/contact-section'),
    Header = require('./views/header');
var ts = new TechSection();
var cs = new ContactSection();
var hs = new Header();
