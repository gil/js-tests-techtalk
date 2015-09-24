var CounterModel = Backbone.Model.extend({
  url : '/counter'
});

var CounterView = Backbone.View.extend({

  events: {
    'click .increase' : 'increase',
    'click .decrease' : 'decrease'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'readCounter');

    this.model = new CounterModel();
    this.readCounter();
  },

  render: function() {
    this.$el
      .empty()
      .append('<div class="counter">' + this.model.get('counter') +  '</div><button class="increase">+</button><button class="decrease">-</button>')
      .appendTo( $('body') );
  },

  readCounter: function() {
    this.model.fetch().success(this.render);
  },

  increase: function() {
    var current = this.model.get('counter') || 0;
    this.model.save({ counter : current + 1 }).success(this.readCounter);
  },

  decrease: function() {
    var current = this.model.get('counter') || 0;
    this.model.save({ counter : current - 1 }).success(this.readCounter);
  },

  doSomethingAsync: function(callback) {
    setTimeout(function() {
      var something = true;
      callback(something);
    }, 1000);
  }

});