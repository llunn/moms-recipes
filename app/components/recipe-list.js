import Component from '@glimmer/component';

export default class RecipeListComponent extends Component {
  columns = [
    {"propertyName": 'title', sortDirection: 'asc', sortPrecedence: 1,  "title": "Name", "className": "emt-column-recipe-title"},
    {"propertyName": 'category', sortDirection: 'asc', sortPrecedence: 1,"title": "Category", "filterWithSelect": true,  "className": "emt-column-recipe-category"},
    {"propertyName": 'servings', "title": "Servings", "filterWithSelect": true, "className": "emt-column-recipe-servings"},
    {"propertyName": 'cookingTime', "title": "Cooking Time", "filterWithSelect": true, "className": "emt-column-recipe-cooking-time"},
    {"title": "", "component": "emt/recipe-controls"}
  ]
}
