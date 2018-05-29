import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  isCooking: DS.attr('boolean', {defaultValue: false}),
  numberOfStudents: DS.attr('number', {defaultValue: 0})
});
