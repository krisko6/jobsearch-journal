JobsearchJournal.Views.InterviewSub = Backbone.View.extend({
  template: JST['interviews/sub'],
  initialize: function(options){
    this.listenTo(this.model,"sync",this.render);
  },

  events: {
    'click .del-button' : 'deleteInterview'
  },

  render: function(){

    var content = this.template({interview: this.model});
    this.$el.html(content);
    //debugger
    return this;
  },

  deleteInterview: function(event){
     event.preventDefault();
     this.model.destroy();
     this.remove();
  }
});
