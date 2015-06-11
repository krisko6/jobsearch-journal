JobsearchJournal.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.collection = options.apps;
  },

  routes:{
    "" : "index",
    "applications/new" : "newApplication",
    "applications/:id" : "showApplication",
    "applications/:id/edit" : "editApplication"
  },

  index: function(){
    this.collection.fetch();
    var content = new JobsearchJournal.Views.AppsIndex({collection: this.collection});
    this._swapView(content);
  },

  newApplication: function(){
    this.collection.fetch();
    var app = new JobsearchJournal.Models.Application();
    var content = new JobsearchJournal.Views.AppForm({
      collection: this.collection,
      model: app});
    this._swapView(content);
  },

  editApplication: function(id){
    this.collection.fetch();
    var app = this.collection.getOrFetch(id)
    var content = new JobsearchJournal.Views.AppForm({
      collection: this.collection,
      model: app});
    this._swapView(content);
  },

  showApplication: function(id){
    var app = this.collection.getOrFetch(id);
    var content = new JobsearchJournal.Views.AppShow({
      model: app});
    this._swapView(content);
  },

  _swapView: function(view){
    this.currentView && this.currentView.remove()
    this.currentView = view;
    this.$rootEl.html(this.currentView.render().$el);
  }

});
