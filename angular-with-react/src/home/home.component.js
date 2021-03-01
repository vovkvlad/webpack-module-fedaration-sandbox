import NgComponent from '../ng-component';
import template from './home.html';

export default class Home extends NgComponent {
  static selector = 'home';

  static template = template;

  static directives = [];

  constructor() {
    super();
  }
}
