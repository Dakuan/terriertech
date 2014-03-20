require.config({
    paths: {
        jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min',
        waypoints: '//cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min',
        underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        waypoints: {
            deps: ['jquery']
        },
        backbone: {
            deps: ['jquery', 'underscore']
        }
    }
});

require(['jquery', './views/tech-section', './views/contact-section'], function ($, TechSection, ContactSection) {
    $(function () {
        var ts = new TechSection();
        var cs = new ContactSection();
    });
});
