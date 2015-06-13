JobsearchJournal.Views.OffersIndex = Backbone.CompositeView.extend({
  template: JST['offers/index'],
  initialize: function(options){
    this.applications = options.applications;
    this.render();
    var offersList = new JobsearchJournal.Views.OffersList({collection: this.collection});
    this.addSubview(".offersList",offersList);
    this.listenTo(this.collection,"sync",this.render);

    var offerForm = new JobsearchJournal.Views.OfferForm({
      applications: this.applications,
      collection: this.collection,
      model: new JobsearchJournal.Models.Offer()});
    this.addSubview(".offerForm",offerForm);
  },

  render: function(){
    this.$el.empty();
    var content = this.template({offers: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }


});
