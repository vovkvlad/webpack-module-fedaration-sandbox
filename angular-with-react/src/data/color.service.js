import NgService from "../ng-service";

export default class ColorService extends NgService {
  constructor() {
    super();
    this.colors = [];
    this.themeColor = null;
    this.addColor = this.addColor.bind(this);
  }

  setThemeColor(color) {
    this.themeColor = color;
  }

  addColor(color) {
    if (this.colors.includes(color)) {
      return;
    }

    this.colors.push(color);
    this.themeColor = color;
  }

  fetch() {
    // TODO: Add error handler (use angular logger).
    return import("./colors.json").then((data) => {
      this.colors = data.default;

      if (!this.themeColor) {
        this.themeColor = this.colors[0];
      }
    });
  }
}
