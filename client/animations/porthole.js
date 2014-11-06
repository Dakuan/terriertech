var waypoint = require('../../components/waypoints/waypoints');

function bindAnimation() {
    var port = $(this);
    port.waypoint(function() {
        port.addClass('animated fadeInDown');
    }, {
        offset: '90%'
    });
}
module.exports = bindAnimation;
