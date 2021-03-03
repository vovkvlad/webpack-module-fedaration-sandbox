import app from "./app.module";
import Home from "./home/home.component";

import AddNewTheme from './new-theme/add-new-theme';

const states = [
  {
    name: "home",
    url: "/",
    template: "<home></home>",
    resolve: {
      component() {
        Home.register();
      },
    },
  },
  {
    name: "new",
    url: "/new",
    component: AddNewTheme,
  },
];

app.config([
  "$locationProvider",
  "$uiRouterProvider",
  function ($locationProvider, $uiRouterProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});

    states.forEach((state) => $uiRouterProvider.stateRegistry.register(state));
  },
]);
