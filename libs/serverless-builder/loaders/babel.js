const Context = require('../Context');

const { nodeVersion } = Context.get();

module.exports = () => ({
  loader: require.resolve('babel-loader'),
  options: {
    cacheDirectory: false,
    cacheCompression: false,
    plugins: [
      require.resolve('@babel/plugin-transform-runtime'),
      require.resolve('@babel/plugin-proposal-class-properties'),
      require.resolve('babel-plugin-source-map-support')
    ],
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          targets: {
            node: nodeVersion
          }
        }
      ]
    ]
  }
});
