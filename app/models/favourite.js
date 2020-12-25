import { attr, belongsTo } from '@ember-data/model';
import { Model } from 'ember-pouch';

export default class FavouriteModel extends Model {
  @attr({defaultValue() { return new Date().toISOString()}}) dateCreated;
  @attr('string', {defaultValue: 'recipe'}) type;
  @belongsTo('recipe') recipe;
}
