window.JobsearchJournal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new JobsearchJournal.Routers.Router({
      $rootEl:$("#main"),
      apps: new JobsearchJournal.Collections.Applications(),
      interviews: new JobsearchJournal.Collections.Interviews()
    });

    Backbone.history.start();
  }
};
