import NgComponent from "../ng-component";
import {$rootScope} from "../ng";
import ColorService from "../data/color.service";
import template from "./home.html";
import "./home.css";

export default class Home extends NgComponent {
  static selector = "home";

  static template = template;

  constructor() {
    super();

    this.colorService = ColorService.getInstance();
  }

  $onInit() {
    this.onInit();
  }

  async onInit() {
    await this.colorService.fetch();

    this.setState({
      themeColor: this.colorService.themeColor,
    });

    $rootScope.$on('theme:changed', (event, data) => {
      this.setState({
        themeColor: data,
      });
    });
  }
}
