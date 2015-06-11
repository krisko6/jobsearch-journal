JobsearchJournal.Views.InterviewForm = Backbone.View.extend({
  tagName: "form",
  template: JST['interviews/form'],
  initialize: function(options){
    this.app = options.app;
  },

  events: {
    "submit" : "submit"
  },

  render: function(){
    this.$el.empty();
    var content = this.template({interview: this.model, app: this.app});
    this.$el.html(content);
    return this;
  },

  submit: function(event){
    event.preventDefault();

    var data = $("form").serializeJSON();
    this.model.set(data);
    var that = this;
    this.model.save({},{
      success: function(){
        that.collection.add(that.model,{merge:true});
        that.model = new JobsearchJournal.Models.Interview();
        that.render();
      }
    });
  }


});