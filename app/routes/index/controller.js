import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service appState;

  @tracked isSearchOptionsVisible = false;

  @action
  onClickShowSearchOptions() {
      this.isSearchOptionsVisible = !this.isSearchOptionsVisible;
  }

  @action
  onClickTransitionToRecipes(category) {
    this.appState.recipeFilter = category.title;
    this.transitionToRoute('recipes');

  }

  @action
  recipeCount(category) {
    // console.log(category)
    let recipes = this.model.filter((recipe) => {
      // console.log(recipe.category, category)
      return recipe.category == category
    });
    // console.log(recipes)
    return recipes.length;
  }
}
