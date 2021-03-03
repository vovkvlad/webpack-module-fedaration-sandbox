import NgComponent from "../ng-component";
import {$rootScope} from "../ng";
import template from "./home.html";
import "./home.css";

export default class Home extends NgComponent {
  static selector = "home";

  static template = template;

  $onInit() {
    this.onInit();
  }

  onInit() {
    $rootScope.$on('theme:changed', (event, data) => {
      this.setState({
        themeColor: data,
      });
    });
  }
}
