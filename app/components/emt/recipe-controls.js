import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { tracked }  from '@glimmer/tracking';

export default class EmtRecipeControlsComponent extends Component {
  @service router;
  @service appState;
  @service store;

  @tracked favouritedPrefix = "far";

  @computed('favouritedPrefix')
  get isFavourited() {
    return this.favouritedPrefix == "far" ? false : true;
  }

  @action
  onClickPreview() {
    this.router.transitionTo('recipes.view', this.args.record)
  }

  @action
  async computeFavouritedStatus() {
    let favouritedRecipes = await Promise.all(this.appState.favourites.map((favourite) => favourite.recipe));
    let favourites = favouritedRecipes.filterBy('id', this.args.record.get('id'));

    this.favouritedPrefix = (favourites.length > 0) ? "fas" : "far";
  }

  @action
  async onClickFavourite() {
    if (this.isFavourited) {
      this.appState.favourites.forEach((favourite) => {
        favourite.recipe.then((recipe) => {
          if (recipe == this.args.record) {
            favourite.destroyRecord().then(this.computeFavouritedStatus);
          }
        });
      })
    } else {
      let newFavourite = this.store.createRecord('favourite', {
        recipe: this.args.record
      });

      await newFavourite.save();
      this.computeFavouritedStatus();
    }
  }
}
