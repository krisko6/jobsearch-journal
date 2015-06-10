JobsearchJournal.Views.AppsIndex = Backbone.View.extend({
  template: JST['applications/index'],
  initialize: function(options){
    this.listenTo(this.collection,"add",this.render);
  },
  render: function(){
    this.$el.empty();
    var content = this.template({apps: this.collection});
    this.$el.html(content);
    return this;
  }

});
