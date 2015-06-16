JobsearchJournal.Views.InterviewIndex = Backbone.CompositeView.extend({
  template: JST['interviews/index'],
  initialize: function(options){
    globe = this.collection;
    this.listenTo(this.collection,"remove",this.removeModelSubview);
    this.listenTo(this.collection,"add",this.addInterviewSubview);

    this.collection.each(function(interview){
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
    console.log(this.collection.length);
    //this.$el.empty();
    var content = this.template({interviews: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  // deleteInterview: function(event){
  //   event.preventDefault();
  //   var $target = $(event.currentTarget);
  //   var dataId = $target.attr("data-id");
  //   var model = this.collection.get(dataId);
  //   model.destroy();
  // }


});
