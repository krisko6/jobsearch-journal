JobsearchJournal.Views.FilteredAppsIndex = Backbone.CompositeView.extend({
  template: JST['applications/filter'],

  initialize: function(options){
    this.listenTo(this.collection,"add",this.render);
    this.listenTo(this.collection,"reset",this.resetSubviews);
    this.listenTo(this.collection,"remove",this.removeApplication);
    this.listenTo(this.collection,"add",this.addAppSubview);
    this.listenTo(this.collection,"remove",this.removeAppSubview);

    this.collection.each(function(app){
      this.addAppSubview(app);
    }.bind(this));
  },

  addAppSubview: function(app){

    var newView = new JobsearchJournal.Views.AppSubview({model: app});
    this.addSubview(".app-subviews",newView);
  },
  removeAppSubview: function(app){
    this.removeModelSubview(".app-subviews",app);
  },

  render: function(){
    this.$el.empty();
    var content = this.template({apps: this.collection.sort()});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  resetSubviews: function (subviews) {
    this.eachSubview(function (subview) {
      subview.remove();
    });
    this._subviews = {};
    this.collection.each(function (app) {
      this.addAppSubview(app);
    }.bind(this));
    this.render();
  }
  // deleteApp: function(event){
  //   event.preventDefault();
  //   var $target = $(event.currentTarget);
  //   var dataId = $target.attr("data-id");
  //   var model = this.collection.get(dataId);
  //   model.destroy();
  // },



});
