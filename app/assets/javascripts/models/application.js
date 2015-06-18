JobsearchJournal.Models.Application = Backbone.Model.extend({
  urlRoot: '/api/applications',
  interviews: function () {
    if (!this._interviews) {
      this._interviews = new JobsearchJournal.Collections.Interviews([], {application: this });
    }

    return this._interviews;
  },

  parse: function (response) {

    if (response.interviews) {
      this.interviews().set(response.interviews, { parse: true });
      delete response.interviews;
    }

    return response;
  }
});
