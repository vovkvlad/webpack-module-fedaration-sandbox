import NgComponent from "../ng-component";
import template from "./theme-switcher.html";
import './theme-switcher.css'

export default class ThemeSwitcher extends NgComponent {
  static selector = "theme-switcher";

  static template = template;

  static bindings = {
    colors: '<',
    setThemeColor: '<',
  };

  constructor() {
    super();
  }
}
