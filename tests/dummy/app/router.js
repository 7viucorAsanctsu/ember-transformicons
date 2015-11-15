import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('menu');
  this.route('grid');
  this.route('add');
  this.route('remove');
  this.route('mail');
  this.route('form');
  this.route('video');
  this.route('loader');
});

export default Router;
