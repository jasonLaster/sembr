define( ['sembr', 'backbone', 'marionette', 'jquery', 'trackr/views/plantings/action', 'hbs!./action.tpl'],
function(sembr, Backbone, Marionette, $, PlantingActionView, template) {
  //ItemView provides some default rendering logic
  return Backbone.Marionette.CollectionView.extend( {
    template: template,
    itemView: PlantingActionView,

    // View Event Handlers
    events: {
        
    },

    initialize: function  () {
        sembr.log('Planting actions init', this.collection);
    },

    onRender: function(){
        sembr.log("Rendered Planting Actions", this.collection);
        sembr.log()
    }

  });
});