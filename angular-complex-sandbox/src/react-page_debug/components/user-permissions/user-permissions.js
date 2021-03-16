import React from 'react';

import UserPermissionsService from 'admin_app/UserPermissionsService';

import'./user-permissions.css';

export function UserPermissions() {
  const userPermissionsService = UserPermissionsService.getInstance();

  return (
    <div className="user-permissions-listing">
      {Object.keys(userPermissionsService.userPermissions).map(permissionsName => {
        return (
          <div className="permission-item" key={permissionsName}>
            <div className="permission-item-name">{permissionsName}</div>
            <div className="permission-item-value">{userPermissionsService.userPermissions[permissionsName] ? '✅' : '❌'}</div>
          </div>
        );
      })}
    </div>
  );
}