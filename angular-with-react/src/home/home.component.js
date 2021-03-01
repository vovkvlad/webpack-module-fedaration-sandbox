import NgComponent from "../ng-component";
import ThemeSwitcher from "../theme-switcher/theme-switcher.component";
import ColorService from "../data/color.service";
import template from "./home.html";
import "./home.css";

export default class Home extends NgComponent {
  static selector = "home";

  static template = template;

  static directives = [ThemeSwitcher];

  constructor() {
    super();

    this.colorService = ColorService.getInstance();
    this.setThemeColor = this.setThemeColor.bind(this);
  }

  $onInit() {
    this.onInit();
  }

  async onInit() {
    await this.colorService.fetch();

    this.setState({
      themeColor: this.colorService.themeColor,
      colors: this.colorService.colors,
    });
  }

  setThemeColor(color) {
    this.colorService.setThemeColor(color);
    this.setState({
      themeColor: this.colorService.themeColor,
    });
  }
}
