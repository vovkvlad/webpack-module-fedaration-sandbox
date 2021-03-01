import NgService from "../ng-service";

export default class ColorService extends NgService {
  constructor() {
    super();
    this.colors = [];
    this.themeColor = null;
  }

  setThemeColor(color) {
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
