import { attr } from '@ember-data/model';
import { Model } from 'ember-pouch';

export default class ApplicationModel extends Model {
  @attr('string', {defaultValue: "Ma's Recipes"}) title;
  @attr({defaultValue() { return   [
      {"title": "Cakes", "description": "All the Cakes"},
      {"title": "Cookies", "description": "All the Cookies"},
      {"title": "Casseroles", "description": "All the Casseroles"},
      {"title": "Chicken Dishes", "description": "All the Chicken Dishes"},
      {"title": "Pies", "description": "All the Pies"},
      {"title": "Fillings/Frostings", "description": "All the Fillings/Frostings"},
      {"title": "Breads", "description": "All the Breads"},
      {"title": "Muffins", "description": "All the Muffins"},
      {"title": "Squares", "description": "All the Squares"},
      {"title": "Candies", "description": "All the Candies"},
      {"title": "Christmas Cooking", "description": "All the Christmas Cooking"},
      {"title": "Meat Dishes", "description": "All the Meat Dishes"},
      {"title": "Bread Machine", "description": "All the Bread Machine"},
      {"title": "Miscellaneous", "description": "All the Miscellaneous"},
      {"title": "Desserts", "description": "All the Desserts"},
      {"title": "Soups", "description": "All the Soups"},
      {"title": "Fish Dishes", "description": "All the Fish Dishes"},
      {"title": "Salads", "description": "All the Salads"},
      {"title": "Pasta Dishes", "description": "All the Pasta Dishes"},
      {"title": "Preserves", "description": "All the Preserves"},
      {"title": "Jams & Jellies", "description": "All the Jams & Jellies"},
      {"title": "Quick Breads", "description": "All the Quick Breads"},
      {"title": "Cheesecakes", "description": "All the Cheesecakes"},
      {"title": "Vegetable Dishes", "description": "All the Vegetable Dishes"},
      {"title": "Sauces", "description": "All the Sauces"},
      {"title": "Slow Cooker", "description": "All the Slow Cooker"},
      {"title": "Appetizers", "description": "All the Appetizers"},
      {"title": "BBQ", "description": "All the BBQ"},
      {"title": "Uncategorized", "description": "All the Uncategorized"}
  ].sort((a, b) => a.title < b.title ? -1 : 1)}}) categories;

}
