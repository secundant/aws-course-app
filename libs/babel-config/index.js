/**
 * require.resolve because https://github.com/vercel/next.js/discussions/19640
 */

module.exports = api => {
  api.cache(true);

  return {
    presets: [
      [
        require.resolve('next/babel'),
        {
          'preset-env': {
            targets: {
              chrome: 80
            },
            useBuiltIns: 'usage',
            corejs: 3
          }
        }
      ]
    ],
    plugins: [
      [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
      [
        require.resolve('babel-plugin-transform-imports'),
        {
          'date-fns/locale': {
            transform: 'date-fns/locale/${member}',
            preventFullImport: true
          },
          'date-fns': {
            transform: 'date-fns/${member}',
            preventFullImport: true
          },
          '@material-ui/core': {
            transform: '@material-ui/core/${member}',
            preventFullImport: true
          },
          '@material-ui/icons': {
            transform: '@material-ui/icons/${member}',
            preventFullImport: true
          },
          lodash: {
            transform: 'lodash/${member}',
            preventFullImport: false
          },
          ramda: {
            transform: 'ramda/src/${member}',
            preventFullImport: true
          }
        }
      ]
    ],
    env: {
      production: {
        plugins: [
          [
            require.resolve('babel-plugin-styled-components'),
            {
              ssr: true,
              pure: true,
              minify: true,
              displayName: false
            }
          ]
        ]
      },
      development: {
        plugins: [
          [
            require.resolve('babel-plugin-styled-components'),
            {
              ssr: true,
              displayName: true
            }
          ]
        ]
      }
    }
  };
};
