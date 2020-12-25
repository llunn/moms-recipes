import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class SetupController extends Controller {
    @tracked setupMessage = "";
    @tracked setupDetails = "";
}
