import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    fire(chef) {
      chef.destroyRecord();
      this.transitionToRoute('chefs');
    }
  }
});
