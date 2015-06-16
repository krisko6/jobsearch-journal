JobsearchJournal.Views.FilteredAppsIndex = Backbone.CompositeView.extend({
  template: JST['applications/filter'],

  initialize: function(options){
    this.listenTo(this.collection,"add remove reset",this.render);
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
  events: {
    "click .del-button" : "deleteApp",
  },
  render: function(){

    this.$el.empty();
    var content = this.template({apps: this.collection.sort()});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  deleteApp: function(event){
    event.preventDefault();
    var $target = $(event.currentTarget);
    var dataId = $target.attr("data-id");
    var model = this.collection.get(dataId);
    model.destroy();
  },



});
