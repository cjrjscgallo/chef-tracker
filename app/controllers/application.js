import Controller from '@ember/controller';
import { set } from '@ember/object';
import { alias } from '@ember/object/computed';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  newChef: null,
  chefCount: alias('model.length'),
  cookingCount: filterBy('model', 'isCooking', true),
  actions: {
    enter(chef) {
      set(chef, "isCooking", true);
      chef.save();
    },
    exit(chef) {
      set(chef, "isCooking", false);
      chef.save();
    },
    saveNewChef() {
      this.store.createRecord('chef', {
        isCooking: false,
        name: this.get('newChef')
      }).save()
      this.set('newChef', '')
    },
    fire(chef) {
      chef.destroyRecord();
    }
  }
});
