import { createElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import NgComponent from '.ng-component';

export default class NgReactComponent extends NgComponent {
  static wrap(ReactComponent, selector, transclude) {
    return class extends NgReactComponent {
      static reactComponent = ReactComponent;

      static selector = selector;

      static transclude = transclude;

      static bindings = Object.keys(ReactComponent.propTypes || {}).reduce(
        (acc, key) => {
          acc[key] = '<';
          return acc;
        },
        {}
      );
    };
  }

  constructor($element) {
    'ngInject';
    super();
    this.$element = $element;
  }

  $onInit() {
    this.updateElement();
  }

  $onChanges() {
    this.updateElement();
  }

  $onDestroy() {
    unmountComponentAtNode(this.$element[0]);
  }

  updateElement() {
    const { reactComponent } = this.constructor;
    const componentElement = createElement(
      reactComponent,
      this.bindingsToProps()
    );
    render(componentElement, this.$element[0]);
  }

  bindingsToProps() {
    const { bindings } = this.constructor;
    return Object.keys(bindings).reduce((props, key) => {
      props[key] = this[key];
      return props;
    }, {});
  }
}
