import NgComponent from 'ng/ng-component';

import template from './app-container.html';
import './app-container.css';

export default class AppContainer extends NgComponent {
  static selector = 'app-container';

  static template = template;
}