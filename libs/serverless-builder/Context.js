const { resolve } = require('path');

let instance = null;

class Context {
  static get() {
    return instance;
  }

  static create(servicePath, service) {
    instance = new Context(servicePath, service);
  }

  constructor(cwd, service) {
    this.cwd = cwd;
    this.paths = {
      tsconfig: resolve(cwd, 'tsconfig.json')
    };
    this.nodeVersion =
      Number.parseInt((service.provider.runtime || '').replace('nodejs', ''), 10) || 10;
  }
}

module.exports = Context;
