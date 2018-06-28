import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return Ember.RSVP.hash({
      chef: this.store.findRecord('chef', params.chef_id),
      restaurants: this.store.findAll('restaurant')
    })
  }
});
