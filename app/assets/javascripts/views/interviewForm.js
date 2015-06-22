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
        $(".errors").html("Interview Saved.");
        that.collection.add(that.model,{merge:true});
        var $badge = $(document.getElementById('interviewBadge'));
        if(new Date(that.model.get('datetime')) > (new Date())){
          var n = parseInt($badge.text(), 10);
          $badge.html(n + 1);
        }
        that.model = new JobsearchJournal.Models.Interview();

        that.render();
      },
      error: function(xhr,response){
        $(".errors").html(response.responseText);

      }
    });
  }


});
