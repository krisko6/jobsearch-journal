JobsearchJournal.Views.AppsIndex = Backbone.View.extend({
  template: JST['applications/index'],
  initialize: function(options){
    this.listenTo(this.collection,"add remove",this.render);
  },
  events: {
    "click .del-button" : "deleteApp"
  },
  render: function(){
    this.$el.empty();
    var content = this.template({apps: this.collection.sort()});
    this.$el.html(content);
    return this;
  },
  deleteApp: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var dataId = $target.attr("data-id");
    var model = this.collection.get(dataId);
    model.destroy();
  }


});
