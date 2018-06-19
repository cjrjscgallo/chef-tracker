import Component from '@ember/component';

export default Component.extend({
  isOpen: false,
  actions: {
    toggleChef(chef) {
      chef.set("isCooking", !chef.get("isCooking"))
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
    },
    toggleOpen() {
      this.set('isOpen', !this.get('isOpen'))
    }
  }
});
