import ADMIN_ROUTER_STATE from 'admin_app/admin-app-routes';
import REACT_PAGE_ROUTES from "react_app/react-page-routes";

// uncomment this to import local versions of react-page
// import REACT_PAGE_ROUTES from "./react-page_debug/routes";


import app from "./app.module";
import AppContainer from './app-container/app-container'
import Leadeboard from "./leaderboard/leaderboard.component";

const states = [
  {
    name: "app",
    url: "/home",
    template: "<app-container></app-container>",
    resolve: {
      component() {
        AppContainer.register();
      },
    },
  },
  {
    name: "app.leaderboard",
    url: "/leaderboard",
    template: "<leaderboard></leaderboard>",
    resolve: {
      component() {
        Leadeboard.register();
      },
    },
  },
  ...ADMIN_ROUTER_STATE,
  ...REACT_PAGE_ROUTES,
];

app.config([
  "$locationProvider",
  "$uiRouterProvider",
  function ($locationProvider, $uiRouterProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});

    states.forEach((state) => $uiRouterProvider.stateRegistry.register(state));

    $uiRouterProvider.urlService.rules.initial({state: "app.leaderboard"});
  },
]);
