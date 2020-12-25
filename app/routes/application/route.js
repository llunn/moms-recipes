import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { run } from '@ember/runloop';

export default class ApplicationRoute extends Route {
  @service appState;

  async model() {
    let appSettings = (await this.store.findAll('application')).firstObject

    if (appSettings === undefined) {
      appSettings = this.store.createRecord('application')
      await appSettings.save()
      this.appState.firstTimeLaunch = true;
    }

    this.appState.settings = appSettings;

    return appSettings;
  }

  afterModel() {
    if (this.appState.firstTimeLaunch) {
      this.transitionTo('setup');
    }
  }
}
