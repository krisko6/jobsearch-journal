JobsearchJournal.Views.InterviewsIndex = Backbone.View.extend({
  template: JST['interviews/index'],
  initialize: function(options){
    this.listenTo(this.collection,"add remove",this.render);
  },
  events: {
    "click .del-button" : "deleteInterview"
  },
  render: function(){
    this.$el.empty();
    var content = this.template({interviews: this.collection.sort()});
    this.$el.append("<h1>Your Interviews</h1>");
    this.$el.append(content);
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
