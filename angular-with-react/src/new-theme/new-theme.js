import React from "react";
import NgReactComponent from '../ng-react-component';

function NewTheme() {
  return <a href="https://example.com">Add new</a>;
}

const NgNewTheme = NgReactComponent.wrap(NewTheme, 'new-theme');

export default NgNewTheme;
