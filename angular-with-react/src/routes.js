import app from "./app.module";
import Home from "./home/home.component";
import AddNewTheme from "./add-new-theme/add-new-theme";
import ThemeSwitcher from "./theme-switcher/theme-switcher.component";

const states = [
  {
    name: "home",
    url: "/home",
    template: "<home></home>",
    resolve: {
      component() {
        Home.register();
      },
    },
  },
  {
    name: "home.switcher",
    url: "/switcher",
    template: "<theme-switcher></theme-switcher>",
    resolve: {
      component() {
        ThemeSwitcher.register();
      },
    },
  },
  {
    name: "home.new",
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

    $uiRouterProvider.urlService.rules.initial({state: "home.switcher"});
  },
]);
