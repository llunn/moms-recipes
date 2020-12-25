import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';

function trimByChar(string, character) {
  const first = [...string].findIndex(char => char !== character);
  const last = [...string].reverse().findIndex(char => char !== character);
  return string.substring(first, string.length - last);
}

export default class SetupRoute extends Route {
  @service appState;

  async setupController(controller, model) {
    super.setupController(controller, model);

    if (this.appState.firstTimeLaunch) {
      await this.importData(controller);
    }

    scheduleOnce('render', this, () => {
      this.transitionTo('index');}
    );

  }

  async importData(controller) {
    controller.setupMessage = "Importing existing recipes...";
    let categories = (await (await fetch('categories.txt')).text()).split('\n');
    let titles = (await (await fetch('titles.txt')).text()).split('\n');
    let temps = (await (await fetch('temps.txt')).text()).split('\n');
    let timings = (await (await fetch('timing.txt')).text()).split('\n');
    let ingredients1 = (await (await fetch('ingred1.txt')).text()).split('\n');
    let ingredients2 = (await (await fetch('ingred2.txt')).text()).split('\n');
    let instructions = (await (await fetch('directions.txt')).text()).split('\n');
    let servings = (await (await fetch('servings.txt')).text()).split('\n');

    let recipes = [];

    for (let i = 0; i < categories.length; i++) {
        let recipe = {
          title: trimByChar(titles[i].trim(), "\"").trim(),
          category: trimByChar(categories[i].trim(), "\"").trim(),
          temperature: trimByChar(temps[i].trim(), "\"").trim(),
          cookingTime: trimByChar(timings[i].trim(), "\"").trim(),
          ingredients: [],
          instructions: "",
          servings: trimByChar(servings[i].trim(), "\"").trim(),
          servingsUnits: ""
        }

        let ingredients = []

        while (true) {
          if (ingredients1.length > 0 && ingredients1[0] == undefined) {
            break;
          }

          if (ingredients1.length > 0 && ingredients1[0].endsWith('"')) {
            let ingredient = ingredients1.shift()
            recipe.ingredients.push(trimByChar(ingredient, "\""))
            break;
          }

          let ingredient = ingredients1.shift()

          if (ingredient == undefined) {
            break;
          }

          recipe.ingredients.push(trimByChar(ingredient, "\""))
        }

        while (true) {
          if (ingredients2.length > 0 && ingredients2[0] == undefined) {
            break;
          }

          if (ingredients2.length > 0 && ingredients2[0].endsWith('"')) {
            let ingredient = ingredients2.shift()
            recipe.ingredients.push(trimByChar(ingredient, "\""))
            break;
          }

          let ingredient = ingredients2.shift()

          if (ingredient == undefined) {
            break;
          }

          recipe.ingredients.push(trimByChar(ingredient, "\""))
        }

        while (true) {
          if (instructions.length > 0 && instructions[0] == undefined) {
            break;
          }

          if (instructions.length > 0 && instructions[0].endsWith('"')) {
            let instruction = instructions.shift()
            recipe.instructions += `${trimByChar(instruction, "\"")}\n`
            break;
          }

          let instruction = instructions.shift()

          if (instruction == undefined) {
            break;
          }

          recipe.instructions += `${trimByChar(instruction, "\"")}\n`
        }

        recipes.pushObject(recipe)
    }

    controller.setupMessage = "Saving recipes to the database..."

    for (let i = 0; i < recipes.length; i++) {
      let recipe = recipes[i];
      controller.setupMessage = `Saving ${i} of ${recipes.length}...`;
      controller.setupDetails = `${recipe.title}`;

      let record = this.store.createRecord('recipe', recipe)
      await record.save();
    }

    this.appState.firstTimeLaunch = false;

  }
}
