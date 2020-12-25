import Controller from '@ember/controller';

export default class RecipesIndexController extends Controller {
  columns = [
    {"propertyName": 'title', "title": "Name", "className": "emt-column-recipe-title"},
    {"propertyName": 'category', "title": "Category", "className": "emt-column-recipe-category"},
    {"propertyName": 'servings', "title": "Servings", "className": "emt-column-recipe-servings"},
    {"propertyName": 'cookingTime', "title": "Cooking Time", "className": "emt-column-recipe-cooking-time"},
    {"title": "", "component": "emt/recipe-controls"}
  ]
}
