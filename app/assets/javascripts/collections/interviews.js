JobsearchJournal.Collections.Interviews = Backbone.Collection.extend({
  url: "/api/interviews",
  model: JobsearchJournal.Models.Interview,

  comparator: function(modelA,modelB){
    if (modelB.get('datetime') > modelA.get('datetime')){
      return -1;
    }
    if (modelB.get('datetime') === modelA.get('datetime')){
      return 0;
    }
    if (modelB.get('datetime') < modelA.get('datetime')){
      return 1;
    }
  },

  getOrFetch: function(id){
    var interview = this.get(id);
    if(!interview){
      interview = new JobsearchJournal.Model.Interview({id: id});
      interview.fetch({
        success: function(){
          this.add(interview);
        }.bind(this)
      });
    } else {
      interview.fetch();
    }
    return interview;
  }
});
