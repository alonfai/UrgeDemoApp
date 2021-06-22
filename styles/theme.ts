import { extendTheme, ThemeOverride } from '@chakra-ui/react';

const config: ThemeOverride = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      html: {
        padding: 0,
        margin: 0,
        height: '100%',
      },
      body: {
        height: '100%',
        opacity: 1,
      },
    },
  },
};

/**
 * Pre-defined set of custom themeing object used in the Chakra-UI provider
 */
export default extendTheme(config);
