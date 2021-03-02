import app from "./app.module";
import Home from "./home/home.component";
import NewTheme from "./new-theme/new-theme";

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
    component: NewTheme,
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
