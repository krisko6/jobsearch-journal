JobsearchJournal.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.collection = options.apps;
  },

  routes:{
    "" : "index"
  },

  index: function(){
    console.log(this.collection);
    this.collection.fetch();
    var content = new JobsearchJournal.Views.AppsIndex({collection: this.collection});
    this._swapView(content);
    //render index page
  },

  _swapView: function(view){
    this.currentView && this.currentView.remove()
    this.currentView = view;
    this.$rootEl.html(this.currentView.render().$el);
  }

});
