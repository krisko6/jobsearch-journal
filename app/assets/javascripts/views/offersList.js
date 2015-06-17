JobsearchJournal.Views.OffersList = Backbone.CompositeView.extend({
  template: JST['offers/list'],
  initialize: function(options){
    this.listenTo(this.collection,"add",this.addOfferSubview);
    this.collection.each(function(offer){
      this.addOfferSubview(offer);
    }.bind(this));
  },

  addOfferSubview: function(offer){
    var view = new JobsearchJournal.Views.OfferSub({model: offer});
    this.addSubview(".offersSub",view);
  },

  render: function(){
    this.$el.empty();
    var content = this.template({offers: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

});
