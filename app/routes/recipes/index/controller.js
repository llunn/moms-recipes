import Controller from '@ember/controller';

export default class RecipesIndexController extends Controller {
  queryParams = [
    'title',
    'category',
    'servings',
    'cookingTime',
    'sort',
    'sortDirection'
  ];

  filterQueryParameters = {
    pageSize: 10,
    page: 5,
    sort: 'title',
    sortDirection: 'asc'
  };

  columnFilters = [
    'title',
    'category',
    'servings',
    'cookingTime'
  ];

  columns = [
    {"propertyName": 'title', sortDirection: 'asc', sortPrecedence: 1,  "title": "Name", "className": "emt-column-recipe-title"},
    {"propertyName": 'category', sortDirection: 'asc', sortPrecedence: 1,"title": "Category", "filterWithSelect": true,  "className": "emt-column-recipe-category"},
    {"propertyName": 'servings', "title": "Servings", "filterWithSelect": true, "className": "emt-column-recipe-servings"},
    {"propertyName": 'cookingTime', "title": "Cooking Time", "filterWithSelect": true, "className": "emt-column-recipe-cooking-time"},
    {"title": "", "component": "emt/recipe-controls"}
  ]
}
