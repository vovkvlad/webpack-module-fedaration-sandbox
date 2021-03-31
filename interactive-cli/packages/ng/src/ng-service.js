import { injector } from './ng';

export default class NgService {
  static instance = null;

  static getInstance() {
    if (this.instance === null) {
      // `displayName` is available due to Babel transform
      // otherwise, fall back to `name`
      const name = this.displayName || this.name;

      if (!injector) {
        // injector can be not instantiated in the context where Angular (or mocks) is not used
        this.instance = new this();
      } else if (injector.has(name)) {
        // if datarobot.service(...) is used, get the instance from the registry
        this.instance = injector.get(name);
      } else {
        // otherwise, instantiate using injector so DI can still be used in a service's constructor
        this.instance = injector.instantiate(this);
      }
    }

    return this.instance;
  }
}
