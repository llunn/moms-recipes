import Route from '@ember/routing/route';

export default class SettingsIndexRoute extends Route {
  async model() {
    return (await this.store.peekAll('application')).firstObject
  }
}
