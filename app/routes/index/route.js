import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  model() {
    return this.store.findAll('recipe');
  }

  // setupController(controller, model) {
  //
  // }
}
