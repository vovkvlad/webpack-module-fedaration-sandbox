import React from "react";

import {$state} from "ng/ng";

import RemotePackage1 from "package1/package1";
import ColorService from "../data/color.service";

export default class AddNewTheme extends React.Component {
  constructor(props) {
    super(props);
    this.colorService = ColorService.getInstance();
    this.addColor = this.addColor.bind(this);
  }

  addColor(color) {
    this.colorService.addColor(color);
    $state.go('home.switcher');
  }

  render() {
    return <RemotePackage1 onChange={this.addColor} />;
  }
}
