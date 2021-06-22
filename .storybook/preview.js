import React from 'react';
import { Global } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme, fonts } from '../styles';

export const decorators = [
  Story => (
    <ChakraProvider theme={customTheme}>
      <Global styles={fonts} />
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
