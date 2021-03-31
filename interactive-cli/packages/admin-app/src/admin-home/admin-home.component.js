import NgComponent from 'ng/ng-component';

import template from './admin-home.html';
import './admin-home.css';

export default class AdminHomeComponent extends NgComponent {
  static selector = 'admin-container';

  static template = template;
}