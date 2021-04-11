const Context = require('../Context');

const { paths } = Context.get();

module.exports = () => ({
  loader: require.resolve('ts-loader'),
  options: {
    transpileOnly: true,
    configFile: paths.tsconfig,
    experimentalWatchApi: true
  }
});
