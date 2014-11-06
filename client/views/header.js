var Backbone = require('backbone');
var h = require('../../components/headroom/headroom');
module.exports = Backbone.View.extend({
    initialize: function() {
        var myElement = document.querySelector("header");
        // construct an instance of Headroom, passing the element
        var headroom = new window.Headroom(myElement, {
            // vertical offset in px before element is first unpinned
            offset: 50,
            // scroll tolerance in px before state changes
            tolerance: 0,
            // css classes to apply
            classes: {
                // when element is initialised
                initial: "headroom",
                // when scrolling up
                pinned: "pinned",
                // when scrolling down
                unpinned: "unpinned",
                // when above offset
                top: "top",
                // when below offset
                notTop: "not-top"
            }
        });
        // initialise
        headroom.init();
    }
});
