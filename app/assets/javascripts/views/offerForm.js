JobsearchJournal.Views.OfferForm = Backbone.View.extend({
  tagName: "form",
  template: JST['offers/form'],
  initialize: function(options){
    this.applications = options.applications;
    this.listenTo(this.applications,"sync",this.render);
  },

  events: {
    "submit" : "submit"
  },

  render: function(){
    this.$el.empty();
    var content = this.template({offer: this.model, applications: this.applications});
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
        // debugger
        $(".errors").html("Offer Saved.");
        that.model.application().set(
          that.applications.get(that.model.get('application_id')).attributes
        );
        that.collection.add(that.model,{merge:true});
        var $badge = $(document.getElementById('offerBadge'));
        if(new Date(that.model.get('datetime')) > (new Date())){
          var n = parseInt($badge.text(), 10);
          $badge.html(n + 1);
        }
        that.model = new JobsearchJournal.Models.Offer();
        that.render();
      },
      error: function(xhr,response){
        $(".errors").html(response.responseText);

      }
    });
  }


});
