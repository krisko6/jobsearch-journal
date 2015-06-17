JobsearchJournal.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.collection = options.apps; // TA: this.apps = ...
    this.interviews = options.interviews;
    this.offers = options.offers;
  },

  routes:{
    "" : "index",
    "interviews" : "interviewsIndex",
    "applications/new" : "newApplication",
    "applications/:id" : "showApplication",
    "applications/:id/edit" : "editApplication",
    "offers" : "offersIndex"
  },

  index: function(){
    this.collection.fetch();
    var content = new JobsearchJournal.Views.AppsIndex({
      collection: this.collection
    });
    this._swapView(content);
  },

  newApplication: function(){
    this.collection.fetch(); // TA: do we really need this fetch?
    var app = new JobsearchJournal.Models.Application();
    var content = new JobsearchJournal.Views.AppForm({
      collection: this.collection,
      model: app});
    this._swapView(content);
  },

  editApplication: function(id){
    this.collection.fetch();
    var app = this.collection.getOrFetch(id);
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

  interviewsIndex: function(){
    this.interviews.fetch();
    var content = new JobsearchJournal.Views.InterviewIndex({
      collection: this.interviews.sort()
    });
    this._swapView(content);
  },

  offersIndex: function(){
    this.offers.fetch();
    this.collection.fetch();
    var content = new JobsearchJournal.Views.OffersIndex({
      collection: this.offers,
      applications: this.collection
    });
    this._swapView(content);
  },

  _swapView: function(view){
    this.$rootEl.toggle("slide");
    this.$rootEl.fadeOut({complete: function(){
      //this.$rootEl.toggle("slide");
      this.currentView && this.currentView.remove()
      this.currentView = view;
      this.$rootEl.html(this.currentView.render().$el);
    }.bind(this)});

    this.$rootEl.fadeIn();
  }

});
