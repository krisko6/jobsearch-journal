JobsearchJournal.Views.AppForm = Backbone.View.extend({
  tagName: "form",
  template: JST['applications/form'],
  initialize: function(options){

  },

  events: {
    "submit" : "submit"
  },

  render: function(){
    this.$el.empty();
    var content = this.template({app: this.model});
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
        Backbone.history.navigate("",{trigger: true});
      }
    });
  }


});
