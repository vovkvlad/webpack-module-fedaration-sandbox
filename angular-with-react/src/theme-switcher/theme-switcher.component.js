import NgComponent from "../ng-component";
import {$rootScope} from "../ng";
import ColorService from "../data/color.service";
import template from "./theme-switcher.html";
import NewTheme from "./new-theme-link";
import "./theme-switcher.css";

export default class ThemeSwitcher extends NgComponent {
  static selector = "theme-switcher";

  static template = template;

  static directives = [NewTheme];

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

    $rootScope.$emit('theme:changed', this.colorService.themeColor);
  }

  setThemeColor(color) {
    this.colorService.setThemeColor(color);
    this.setState({
      themeColor: this.colorService.themeColor,
    });

    $rootScope.$emit('theme:changed', this.colorService.themeColor);
  }
}
