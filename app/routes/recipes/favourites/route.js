import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipesFavouritesRoute extends Route {
  @service appState;

  model() {
    return this.appState.favourites.map((favourite) => favourite.recipe)
  }
}
