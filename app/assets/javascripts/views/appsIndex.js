JobsearchJournal.Views.AppsIndex = Backbone.CompositeView.extend({
  template: JST['applications/index'],

  initialize: function(options){
    // this.render();
    this.filteredCollection = new JobsearchJournal.Collections.Applications();
    this.filteredView = new JobsearchJournal.Views.FilteredAppsIndex({collection: this.filteredCollection});

    this.addSubview(".filteredIndex",this.filteredView);
    this.listenTo(this.collection,"sync",this.render);
  },
  events: {
    "keyup .search" : "search"
  },
  render: function(){
    this.$el.empty();
    var content = this.template({});
    this.$el.append(content);
    this.attachSubviews();
    this.$('.search').trigger("keyup");
    return this;
  },

  search: function(event){
    console.log($(event.currentTarget).val());

    var str = $(event.currentTarget).val();
    var regexp = new RegExp(str);
    var results = this.collection.filter(function(application){

      return regexp.test(application.get('company'));
      });

    this.filteredCollection.reset(results);
  }


});
