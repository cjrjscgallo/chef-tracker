import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.get('model').save();
      this.transitionToRoute('chefs.chef', this.get('model.id'));
    }
  }
});
