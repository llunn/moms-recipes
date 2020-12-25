import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AppStateService extends Service {
  @tracked settings;
  @tracked firstTimeLaunch;

  constructor() {
    super(...arguments);
    this.firstTimeLaunch = false;
  }
}
