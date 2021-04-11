const { join, resolve } = require('path');
const Context = require('./Context');
const loaders = require('./loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
  lib: {
    entries,
    webpack: { isLocal }
  }
} = require('serverless-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { cwd, paths } = Context.get();
const FILE_EXTENSIONS = ['.wasm', '.mjs', '.js', '.json', '.ts'];

const enableWarmup = !!entries['_warmup/index'];

if (enableWarmup) {
  delete entries['_warmup/index'];
}

const alias = {
  ['source-map-support/register']: require.resolve('source-map-support/register')
};

module.exports = {
  entry: entries,
  target: 'node',
  context: cwd,
  stats: 'errors-only',
  devtool: 'source-map',
  mode: isLocal ? 'development' : 'production',
  performance: {
    hints: false
  },
  resolve: {
    alias,
    symlinks: false,
    extensions: FILE_EXTENSIONS,
    plugins: [
      new TsconfigPathsPlugin({
        configFile: paths.tsconfig,
        extensions: FILE_EXTENSIONS
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [loaders.babel()]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.ts$/,
        use: [loaders.babel(), loaders.typescript()],
        exclude: [[resolve(cwd, '.serverless'), resolve(cwd, '.webpack')]]
      }
    ]
  },
  // PERFORMANCE ONLY FOR DEVELOPMENT
  optimization: isLocal
    ? {
        splitChunks: false,
        removeEmptyChunks: false,
        removeAvailableModules: false
      }
    : // Don't minimize in production
      // Large builds can run out of memory
      { minimize: false },
  plugins: [
    enableWarmup &&
      new CopyWebpackPlugin({
        patterns: [
          {
            from: join(cwd, '_warmup'),
            to: '_warmup'
          }
        ]
      })
  ].filter(plugin => !!plugin),
  node: {
    __dirname: false
  }
};
