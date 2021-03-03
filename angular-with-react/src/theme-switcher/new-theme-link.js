import React from "react";
import NgReactComponent from '../ng-react-component';

function NewTheme() {
  return <a href="/home/new" className="anchor">+</a>;
}

const NgNewTheme = NgReactComponent.wrap(NewTheme, 'new-theme-link');

export default NgNewTheme;
