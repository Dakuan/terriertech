var Backbone = require('backbone'),
    portHoleAnimation = require('../animations/porthole');

module.exports = Backbone.View.extend({
    initialize: function() {
        this.$el = $('section.contact');
        this.$el.find('li').each(portHoleAnimation);
    }
});
