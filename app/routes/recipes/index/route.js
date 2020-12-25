import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipesIndexRoute extends Route {
  @service appState;

  async model(params) {
    let recipes = await this.store.peekAll('recipe').sortBy('title');

    if (recipes.length == 0) {
      recipes = await this.store.findAll('recipe');
    }

    return this.appState.recipeFilter ? recipes.filterBy('category', this.appState.recipeFilter) : recipes;

  }
}
