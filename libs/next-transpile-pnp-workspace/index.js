const { resolve } = require('path');

exports.withTranspilePnPWorkspace = withTranspilePnPWorkspace;

function withTranspilePnPWorkspace({ include, exclude } = {}) {
  const isNotPnPMode = !process.versions.pnp;

  if (isNotPnPMode) {
    console.warn(`[transpile-pnp-workspace] PnP not enabled.`);
    return nextConfig => nextConfig;
  }
  const { getDependencyTreeRoots, getPackageInformation, findPackageLocator } = require('pnpapi');

  const allWorkspacePackagesLocators = getDependencyTreeRoots();

  const excludedLocators = exclude?.map(findPackageLocator) ?? [];
  const includedLocators = include?.map(findPackageLocator) ?? allWorkspacePackagesLocators;

  return function withTranspilePnPWorkspaceNextConfig({
    webpack: originalWebpackFn,
    ...nextConfig
  }) {
    return {
      ...nextConfig,
      webpack(webpackConfig, options) {
        const { defaultLoaders, dir } = options;
        const rootPackageLocator = allWorkspacePackagesLocators.find(
          locator => locator.reference === 'workspace:.'
        );
        const hostPackageLocator = findPackageLocator(resolve(dir, 'index.js'));
        const allExcludedLocators = [...excludedLocators, rootPackageLocator, hostPackageLocator];
        const locatorsToTranspile = includedLocators.filter(
          locator =>
            !allExcludedLocators.some(
              excludedLocator => excludedLocator.reference === locator.reference
            )
        );
        const pathsToTranspile = locatorsToTranspile.map(
          locator => getPackageInformation(locator).packageLocation
        );

        /**
         * Babel
         */

        defaultLoaders.babel.options.rootMode = 'upward';

        webpackConfig.module.rules.push({
          test: /\.+(js|jsx|mjs|ts|tsx)$/,
          use: defaultLoaders.babel,
          include: pathsToTranspile
        });

        return originalWebpackFn ? originalWebpackFn(webpackConfig, options) : webpackConfig;
      }
    };
  };
}
