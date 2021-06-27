import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../styles';
import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

const withChakra = StoryFn => {
  return (
    <ChakraProvider theme={customTheme}>
      <StoryFn />
    </ChakraProvider>
  );
};

const withTesting = withTests({
  results,
});

export const decorators = [withChakra, withTesting];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
