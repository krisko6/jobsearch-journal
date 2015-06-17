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
      console.log("hoy!")
    }.bind(this));
    this.$el.html(content);

    //debugger
    return this;
  },

  deleteInterview: function(event){
     event.preventDefault();
     var $badge = $(document.getElementById('interviewBadge'));
     if(new Date(this.model.get('datetime')) > (new Date())){
       var n = parseInt($badge.text(), 10);
       console.log(n);
       $badge.html(n - 1);
     }
     this.$el.hide('slide', {direction: 'right'}, 1000, function() {
       console.log("hoy!")
       this.model.destroy();
       this.remove();
     }.bind(this));

  }
});
