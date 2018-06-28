import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.get('model').save();
      this.transitionToRoute('chefs.chef', this.get('model.id'));
    },
    selectRestaurant(selection, component){
      let chef = this.get('model.chef');
      chef.get('restaurant').then((restaurant)=>{
        chef.set('restaurant', selection);
        selection.save();
        restaurant.save();
      })
    }
  }
});
