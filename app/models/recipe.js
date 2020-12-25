import { attr } from '@ember-data/model';
import { Model } from 'ember-pouch';

export default class RecipeModel extends Model {
  @attr('string', {defaultValue: ""}) title;
  @attr('string', {defaultValue: "Uncategorized"}) category;
  @attr('string') temperature;
  @attr('string') cookingTime;
  @attr('string') servings;
  @attr('string') servingUnits;
  @attr({defaultValue() { return [] }}) ingredients;
  @attr({defaultValue() { return [] }}) instructions;
}
