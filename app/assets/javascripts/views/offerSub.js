JobsearchJournal.Views.OfferSub = Backbone.View.extend({
  template: JST['offers/sub'],
  initialize: function(options){
    this.listenTo(this.model,"sync",this.render);
  },

  events: {
    'click .del-button' : 'deleteOffer'
  },

  render: function(){

    var content = this.template({offer: this.model});
    this.$el.fadeIn('slow', function() {
    }.bind(this));
    this.$el.html(content);

    //debugger
    return this;
  },

  deleteOffer: function(event){
     event.preventDefault();
     this.$el.hide('slide', {direction: 'right'}, 1000, function() {
       this.model.destroy();
       this.remove();
     }.bind(this));

  }
});
