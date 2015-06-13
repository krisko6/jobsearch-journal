JobsearchJournal.Collections.Applications = Backbone.Collection.extend({
  url: "/api/applications",
  model: JobsearchJournal.Models.Application,
  comparator: function(modelA,modelB){
    if (modelB.get('created_at') < modelA.get('created_at')){
      return -1;
    }
    if (modelB.get('created_at') === modelA.get('created_at')){
      return 0;
    }
    if (modelB.get('created_at') > modelA.get('created_at')){
      return 1;
    }
  },

  customFilter: function(filters){
    var results = this.where(filters);
    this.reset(results);
  },

  getOrFetch: function(id){
    var app = this.get(id);
    if(!app){
      app = new JobsearchJournal.Models.Application({id: id});
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
