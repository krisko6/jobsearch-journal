JobsearchJournal.Views.OffersList = Backbone.View.extend({
  template: JST['offers/list'],
  initialize: function(options){
    this.listenTo(this.collection,"add remove",this.render);
    this.render();
  },

  events:{
    "click .del-button" : "deleteOffer"
  },

  render: function(){
    this.$el.empty();
    var content = this.template({offers: this.collection});
    this.$el.html(content);
    return this;
  },

  deleteOffer: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var dataId = $target.attr("data-id");
    var model = this.collection.get(dataId);
    model.destroy();
  }
});
