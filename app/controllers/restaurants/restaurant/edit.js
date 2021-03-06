import Controller from '@ember/controller';

export default Controller.extend({
  otherChefs: Ember.computed.setDiff('model.chefs', 'model.restaurant.chefs')
  ,actions: {
    save() {
      this.get('model').save();
      this.transitionToRoute('restaurants.restaurant', this.get('model.id'));
    }
    ,removeChef(chef) {
      let restaurant = this.get('model.restaurant');
      restaurant.get('chefs').removeObject(chef);
      chef.save().then(()=>{
        restaurant.save();
      })
    }
    ,addChef(chef) {
      let restaurant = this.get('model.restaurant');
      restaurant.get('chefs').addObject(chef);
      chef.save().then(()=>{
        restaurant.save();
      })
    }
  }
});
