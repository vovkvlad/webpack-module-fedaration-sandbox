import app from "./app.module";
import {$log} from "./ng";

function appController($scope) {
  "ngInject";

  $log.debug("Init app controller");
}

app.controller("AppController", appController);

export default "AppController";
