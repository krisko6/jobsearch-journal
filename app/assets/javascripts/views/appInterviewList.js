JobsearchJournal.Views.AppInterviewList = Backbone.View.extend({
  template: JST['interviews/index'],
  initialize: function(options){
    this.listenTo(this.collection,"add remove",this.render);
  },
  events: {
    "click .del-button" : "deleteInterview"
  },
  render: function(){
    //console.log(this.collection);
    this.$el.empty();
    //console.log("hey!");
    var content = this.template({interviews: this.collection});
    this.$el.html(content);
    return this;
  },

  deleteInterview: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var dataId = $target.attr("data-id");
    var model = this.collection.get(dataId);
    model.destroy();
  }


});
