JobsearchJournal.Views.AppShow = Backbone.CompositeView.extend({
  template: JST['applications/show'],
  initialize: function(options){
    this.listenTo(this.model,"sync",this.render);
    var interviews = this.model.interviews().sort();
    // this.render(); // TA: I commented this out
    var interviewList = new JobsearchJournal.Views.InterviewIndex({collection: interviews});
    this.addSubview(".interviewsList",interviewList); // TA: use dashes instead of camel case
    var interviewForm = new JobsearchJournal.Views.InterviewForm({
      app: this.model,
      collection: interviews,
      model: new JobsearchJournal.Models.Interview()});
    this.addSubview(".interviewForm",interviewForm);
  },

  render: function(){
    this.$el.empty();
    var content = this.template({app: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }


});
