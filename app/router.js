import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('settings', function() {});
  this.route('recipes', function() {
    this.route('view', {path: 'recipes/:id'});
  });
  this.route('reports', function() {});
  this.route('setup');
});
