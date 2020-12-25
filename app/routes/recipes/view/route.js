import Route from '@ember/routing/route';
import Model from 'ember-data/model';
import { set } from '@ember/object';

export default class RecipesViewRoute extends Route {
  model(params) {
    if (params instanceof Model == false) {
      return this.store.findRecord('recipe', params.id)
    } else {
      return params
    }
  }
}
