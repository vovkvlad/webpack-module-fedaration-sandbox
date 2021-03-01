import app from "./app.module";
import Home from "./home/home.component";

app.config([
  "$stateProvider",
  "$locationProvider",
  function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
  
    $stateProvider.state({
      name: "home",
      url: "/",
      template: '<home></home>',
      resolve: {
        component() {
          Home.register();
        },
      },
    });
  },
]);
