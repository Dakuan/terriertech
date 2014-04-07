define(['jquery', 'waypoints'], function ($) {
    function bindAnimation() {
        var port = $(this);
        port.waypoint(function () {
            port.addClass('animated fadeInDown');
        }, {
            offset: '90%'
        });
    }
    return bindAnimation;
});
