import app from "./app.module";

app.config([
  "$stateProvider",
  "$locationProvider",
  function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
  
    $stateProvider.state({
      name: "home",
      url: "/",
      template: "<h1>Home</h1>",
    });
  },
]);
