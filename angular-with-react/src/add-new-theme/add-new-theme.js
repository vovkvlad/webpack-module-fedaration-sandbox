import React from "react";

import RemotePackage1 from "package1/package1";
import ColorService from "../data/color.service";

export default class AddNewTheme extends React.Component {
  constructor(props) {
    super(props);
    this.colorService = ColorService.getInstance();
  }

  render() {
    return (
      <RemotePackage1
        onChange={this.colorService.addColor}
        themeColor={this.colorService.themeColor}
      />
    );
  }
}
