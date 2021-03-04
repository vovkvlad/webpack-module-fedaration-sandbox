import { $rootScope, $compileProvider, injector } from './ng';

export default class NgComponent {
  static bindings = {};

  static directives = [];

  static transclude = false;

  static register() {
    for (const child of this.directives) {
      child.register();
    }

    const componentName = this.selector.replace(/-([a-z])/g, (_, l) =>
      l.toUpperCase()
    );
    if (!injector.has(`${componentName}Directive`)) {
      $compileProvider.component(componentName, {
        template: this.template,
        bindings: this.bindings,
        transclude: this.transclude,
        controller: this,
      });
    }
  }

  setState(newState, cb) {
    $rootScope.$applyAsync(() => {
      const calculatedState =
        typeof newState === 'function' ? newState(this) : newState;
      Object.assign(this, calculatedState);

      if (typeof cb === 'function') {
        cb();
      }
    });
  }
}
