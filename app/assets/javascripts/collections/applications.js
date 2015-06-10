JobsearchJournal.Collections.Applications = Backbone.Collection.extend({
  url: "/api/applications",
  model: JobsearchJournal.Models.Application,
  getOrFetch: function(id){
    var app = this.get(id);
    if(!app){
      app = new JobsearchJournal.Model.Application({id: id});
      app.fetch({
        success: function(){
          this.add(app);
        }.bind(this)
      });
    } else {
      app.fetch();
    }
    return app;
  }
});
