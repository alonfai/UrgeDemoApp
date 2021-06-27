const path = require('path');
const toPath = _path => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async baseConfig => {
    const nextConfig = require('../next.config.js');
    // merge whatever from nextConfig into the webpack config storybook will use
    return {
      ...baseConfig,
      resolve: {
        ...baseConfig.resolve,
        alias: {
          ...baseConfig.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
