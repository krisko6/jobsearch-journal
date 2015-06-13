JobsearchJournal.Models.Offer = Backbone.Model.extend({
  urlRoot: "/api/offers",

  application: function(){
    if (!this._application) {
      this._application = new JobsearchJournal.Models.Application();
    }

    return this._application;
  },

  parse: function (response) {
    //console.log(response);
    //console.log(response);
    if (response.application) {
      this.application().set(response.application, { parse: true });
      delete response.application;
    }

    return response;
  }
});
