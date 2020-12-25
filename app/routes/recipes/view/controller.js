import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { computed } from '@ember/object';

export default class RecipesViewController extends Controller {
    get splitIngredients() {
      return [
        this.model.ingredients.slice(0, this.model.ingredients.length / 2),
        this.model.ingredients.slice(this.model.ingredients.length / 2, this.model.ingredients.length)
      ]
    }
}
