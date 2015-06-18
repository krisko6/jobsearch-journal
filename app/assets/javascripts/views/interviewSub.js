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
    this.$el.fadeIn('slow', function() {
    }.bind(this));
    this.$el.html(content);

    //debugger
    return this;
  },

  deleteInterview: function(event){
     event.preventDefault();
     this.$el.hide('slide', {direction: 'right'}, 1000, function() {
       this.model.destroy();
       this.remove();
     }.bind(this));

  }
});
