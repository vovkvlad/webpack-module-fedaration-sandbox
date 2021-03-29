import NgComponent from 'ng/ng-component';

import template from './user-permissions.html';
import UserPermissionsService from "./user-permissions.service";

import './user-permissions.css';

export default class UserPermissionsComponent extends NgComponent {
  static template = template;
  static selector = 'user-permissions';

  constructor() {
    super();

    this.userPermissionsService = UserPermissionsService.getInstance();
    this.allPermissionsNames = Object.keys(this.userPermissionsService.userPermissions);
  }
}