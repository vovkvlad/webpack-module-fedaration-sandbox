import NgComponent from 'ng/ng-component';

import UserPermissionsService from "../user-permissions/user-permissions.service";

import { NgAccessGrantedReactCmp } from './access-granted';
import template from './restricted-area.html';

import './restricted-area.css';

export default class RestrictedAreaComponent extends NgComponent {
  static template = template;

  static selector = 'restricted-area'

  static directives = [NgAccessGrantedReactCmp];

  constructor() {
    super();

    this.userPermissionsService = UserPermissionsService.getInstance();

    this.isGodModeEnabled = this.userPermissionsService.isGodModeEnabled();
  }
}