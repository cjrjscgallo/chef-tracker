import Ember from 'ember';
import Controller from '@ember/controller';
import ENV from '../config/environment';

Ember.Controller.reopen({
  rootURL: ENV.rootURL,
  rootImageURL: ENV.rootImageURL
});

Ember.Component.reopen({
  rootURL: ENV.rootURL,
  rootImageURL: ENV.rootImageURL
});

export default Controller.extend({
});
