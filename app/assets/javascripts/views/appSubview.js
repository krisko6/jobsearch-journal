JobsearchJournal.Views.AppSubview = Backbone.View.extend({
  template: JST['applications/subview'],
  initialize: function(options){
    this.listenTo(this.model,"change:status",this.render);
    this.listenTo(this.model, 'sync', this.preventRerender);
  },

  events: {
    "change select" : "select"
  },

  render: function(){
    var content = this.template({app: this.model});
    this.$el.html(content);
    return this;
  },

  select: function(event){
    event.preventDefault();
    // event.stopPropagation();
    var val = $(event.currentTarget).val();
    this.model.set({status: val});
    this.model.save({},{});
  },

  destroy: function(){
    this.model.destroy();
    this.remove();
  }
});
