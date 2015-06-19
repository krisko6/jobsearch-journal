JobsearchJournal.Views.InterviewIndex = Backbone.CompositeView.extend({
  template: JST['interviews/index'],
  initialize: function(options){
    globe = this.collection;
    this.listenTo(this.collection,"remove",this.removeModelSubview);
    this.listenTo(this.collection,"add",this.addInterviewSubview);

    this.collection.sort().each(function(interview){
      this.addInterviewSubview(interview);
    }.bind(this));
  },

  addInterviewSubview: function(interview){

    var view = new JobsearchJournal.Views.InterviewSub({model: interview});
    this.addSubview(".interviewList",view);
  },

  removeInterviewSubview: function(interview){
    this.removeModelSubview(".interviewList",interview);
  },

  render: function(){
    var content = this.template({interviews: this.collection});

    this.$el.html(content);
    this.attachSubviews();
    return this;
  }


});
