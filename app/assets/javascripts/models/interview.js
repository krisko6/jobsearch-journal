JobsearchJournal.Models.Interview = Backbone.Model.extend({
  urlRoot: "/api/interviews",

  application: function(){
    if (!this._application) {
      this._application = new JobsearchJournal.Models.Application();
    }

    return this._application;
  },

  parse: function (response) {

    if (response.application) {
      this.application().set(response.application, { parse: true });
      delete response.application;
    }

    return response;
  }
});
