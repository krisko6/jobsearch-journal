JobsearchJournal.Views.AppSubview = Backbone.View.extend({
  template: JST['applications/subview'],
  initialize: function(options){
    this.listenTo(this.model,"change:status",this.render);
    this.listenTo(this.model, 'sync', this.preventRerender);
  },

  events: {
    "change select" : "select",
    "click .del-button" : "destroy"
  },

  render: function(){
    var content = this.template({app: this.model});
    this.$el.fadeIn('slow', function() {

    }.bind(this));
    this.$el.html(content);
    return this;
  },

  select: function(event){
    event.preventDefault();

    var val = $(event.currentTarget).val();
    this.model.set({status: val});
    this.model.save({},{});
  },

  destroy: function(){
    this.$el.hide('slide', {direction: 'right'}, 1000, function() {
      this.model.destroy();
      this.remove();
    }.bind(this));
  }
});
