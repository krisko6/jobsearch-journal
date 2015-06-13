JobsearchJournal.Collections.Offers = Backbone.Collection.extend({
  url: "/api/offers",
  model: JobsearchJournal.Models.Offer,

  comparator: function(modelA,modelB){
    if (modelB.get('due_date') > modelA.get('due_date')){
      return -1;
    }
    if (modelB.get('due_date') === modelA.get('due_date')){
      return 0;
    }
    if (modelB.get('due_date') < modelA.get('due_date')){
      return 1;
    }
  },

  getOrFetch: function(id){
    var offer = this.get(id);
    if(!offer){
      offer = new JobsearchJournal.Model.Offer({id: id});
      offer.fetch({
        success: function(){
          this.add(offer);
        }.bind(this)
      });
    } else {
      offer.fetch();
    }
    return offer;
  }
});
