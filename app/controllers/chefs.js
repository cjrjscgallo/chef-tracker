import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { filterBy } from '@ember/object/computed';
import { sum } from '@ember/object/computed';
import { mapBy } from '@ember/object/computed';

export default Controller.extend({
  newChef: null,
  chefCount: alias('model.length'),
  cookingCount: filterBy('model', 'isCooking', true),
  studentCount: mapBy('model', 'numberOfStudents'),
  totalNumberOfStudents: sum('studentCount'),
  actions: {
    enter(chef) {
      chef.set("isCooking", true);
      chef.save();
    },
    exit(chef) {
      chef.set("isCooking", false);
      chef.save();
    },
    saveNewChef() {
      this.store.createRecord('chef', {
        name: this.get('newChef')
      }).save()
      this.set('newChef', '')
    },
    addStudent(chef) {
      chef.incrementProperty("numberOfStudents");
      chef.save();
    },
    removeStudent(chef) {
      if (chef.get("numberOfStudents") > 0) {
        chef.decrementProperty("numberOfStudents");
        chef.save();
      }
    }
  }
});
