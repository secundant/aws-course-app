const withBundleAnalyzer = require('@next/bundle-analyzer');
const { withPlugins } = require('next-compose-plugins');
const { withTranspilePnPWorkspace } = require('@lib/next-transpile-pnp-workspace');

const configuration = {
  build: {
    enableAnalyzer: process.env.BUILD_ENABLE_ANALYZER === 'true',
    enableProductionSourceMaps: process.env.BUILD_ENABLE_PRODUCTION_SOURCE_MAP === 'true',
    react: {
      enableStrictMode: process.env.BUILD_ENABLE_DEVELOPMENT_REACT_STRICT_MODE === 'true'
    },
    typescript: {
      ignoreBuildErrors: process.env.BUILD_ENABLE_UNSAFE_IGNORE_TYPESCRIPT_ERRORS === 'true'
    }
  }
};

console.log('[next-config] Configuration loaded:\n', JSON.stringify(configuration, null, 2));

module.exports = withPlugins(
  [
    withTranspilePnPWorkspace(),
    withBundleAnalyzer({
      enabled: configuration.build.enableAnalyzer
    })
  ],
  {
    reactStrictMode: configuration.build.react.enableStrictMode,
    /**
     * @see https://nextjs.org/docs/api-reference/next.config.js/configuring-onDemandEntries
     */
    onDemandEntries: {
      maxInactiveAge: 5 * 60 * 1000,
      pagesBufferLength: 5
    },
    /**
     * @see https://nextjs.org/docs/advanced-features/source-maps
     */
    productionBrowserSourceMaps: configuration.build.enableProductionSourceMaps,
    /**
     * TODO Удалить после окончания длительного рефакторинга
     * @see https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors
     */
    typescript: {
      ignoreBuildErrors: configuration.build.typescript.ignoreBuildErrors
    }
  }
);
