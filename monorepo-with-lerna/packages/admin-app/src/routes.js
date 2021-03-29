import AdminHomeComponent from './admin-home/admin-home.component';
import UserPermissionsComponent from "./user-permissions/user-permissions.component";
import RestrictedAreaComponent from "./restricted-area/restricted-area.component";

const ADMIN_ROUTER_STATE = [
  {
    name: "app.admin",
    url: "/admin",
    template: "<admin-container></admin-container>",
    resolve: {
      component() {
        AdminHomeComponent.register();
      },
    },
  },
  {
    name: "app.admin.userPermissions",
    url: "/user-permissions",
    template: "<user-permissions></user-permissions>",
    resolve: {
      component() {
        UserPermissionsComponent.register();
      },
    },
  },
  {
    name: "app.admin.restrictedArea",
    url: "/restricted-area",
    template: "<restricted-area></restricted-area>",
    resolve: {
      component() {
        RestrictedAreaComponent.register();
      },
    },
  }
];

export default ADMIN_ROUTER_STATE;