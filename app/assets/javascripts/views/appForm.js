JobsearchJournal.Views.AppForm = Backbone.View.extend({
  tagName: "form",
  template: JST['applications/form'],
  initialize: function(options){
    this.listenTo(this.model, 'sync', this.render); // TA: I added this
  },

  events: {
    "submit" : "submit"
  },

  render: function(){
    this.$el.empty(); // TA: we don't need this
    var content = this.template({app: this.model});
    this.$el.html(content);
    return this;
  },

  submit: function(event){
    event.preventDefault();

    var data = $("form").serializeJSON().application;
    this.model.set(data);
    var that = this;
    this.model.save({},{
      success: function(){
        that.collection.add(that.model,{merge:true});
        Backbone.history.navigate("",{trigger: true});
      },
      error: function(xhr,response){
        $(".errors").html(response.responseText);

      }
    });
  }


});
