'use strict';

const path = require('path');
const Context = require('./Context');
const ServerlessWebpack = require('serverless-webpack');

class ServerlessPlugin extends ServerlessWebpack {
  constructor(serverless, options) {
    super(serverless, options);

    this.serverless = serverless;
    this.options = options;

    this.hooks['before:webpack:validate:validate'] = () => {
      const service = this.serverless.service;
      const servicePath = this.serverless.config.servicePath;

      Context.create(servicePath, service);

      service.custom.webpack = {
        packager: 'yarn',
        packagerOptions: {},
        webpackConfig: path.join(path.relative(Context.get().cwd, __dirname), 'webpack.config.js'),
        includeModules: {
          forceExclude: ['aws-sdk'],
          forceInclude: null,
          packagePath: 'package.json'
        }
      };
    };
  }
}

module.exports = ServerlessPlugin;
