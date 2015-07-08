JobsearchJournal.Views.AppsIndex = Backbone.CompositeView.extend({
  template: JST['applications/index'],

  initialize: function(options){
    // this.render();
    this.checkedStatuses = [];
    this.regexp = new RegExp("");
    this.filteredCollection = new JobsearchJournal.Collections.Applications();
    this.filteredView = new JobsearchJournal.Views.FilteredAppsIndex({
      collection: this.filteredCollection
    });

    this.addSubview(".filteredIndex", this.filteredView);
    this.listenTo(this.collection, "sync", this.maybeRender);
    this.listenTo(this.collection, "change", this.checkBox);
  },
  events: {
    "input .search" : "search", // TA: I changed this to input
    "change .filter-check" : "checkBox"
  },

  maybeRender: function (object) {
    if (object === this.collection) {
      this.render();
    }
  },

  render: function(){
    //this.$el.empty();
    var content = this.template({});
    this.$el.html(content);
    this.trigger('renderEvent');
    this.attachSubviews();
    this.$('.search').trigger("input");

    return this;
  },

  search: function(event){
    var str = $(event.currentTarget).val();
    this.regexp = new RegExp(str,'i');
    console.log(this.regexp);
    this.checkFilter();
  },

  checkFilter: function(){
    var results = this.collection.filter(function(application){
      if (this.checkedStatuses.length > 0){
        return this.regexp.test(application.get('company')) && this.checkedStatuses.indexOf(application.get('status')) !== -1;
      } else {
        return this.regexp.test(application.get('company'));
      }
    }.bind(this));
    // this.removeSubview(".filteredIndex",this.filteredView);
    this.filteredView.collection.reset(results).sort();
  },

  checkBox: function(event){
    var val = $(event.currentTarget).val();
    this.checkedStatuses = [];

    $(".filter-check:checked").each(function(idx, filter){
      this.checkedStatuses.push($(filter).val());
    }.bind(this));
    this.checkFilter();
  }


});
