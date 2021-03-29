import NgService from 'ng/ng-service';
import { get } from 'lodash';

import { USER_PERMISSIONS } from './constants';

export default class UserPermissionsService extends NgService {
  constructor() {
    super();

    this.userPermissions = Object.values(USER_PERMISSIONS).reduce((acc, permission) => {
      acc[permission] = false;
      return acc;
    }, {});
  }

  togglePermission(permissionName) {
    this.userPermissions = {
      ...this.userPermissions,
      [permissionName]: !this.userPermissions[permissionName],
    }
  }

  canUse(permissionName) {
    return get(this.userPermissions, permissionName, false);
  }

  canDeleteLeaderBoardItems() {
    return this.canUse(USER_PERMISSIONS.DELETE_LEADERBOARD_ITEMS);
  }

  canAddNewLeaderBoardItems() {
    return this.canUse(USER_PERMISSIONS.ADD_NEW_LEADERBOARD_ITEMS);
  }

  isDecisionMakingEnabled() {
    return this.canUse(USER_PERMISSIONS.ENABLE_DECISION_MAKING);
  }

  isGodModeEnabled() {
    return this.canUse(USER_PERMISSIONS.ENABLE_GOD_RIGHTS);
  }

  isNewLeaderboardUIEnabled() {
    return this.canUse(USER_PERMISSIONS.ENABLE_NEW_LEADERBOARD_UI);
  }
}