import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
});

const config: ThemeOverride = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  breakpoints,
  styles: {
    global: {
      html: {
        padding: 0,
        margin: 0,
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
        minW: '100%',
      },
    },
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
    mono: 'Raleway',
  },
};

/**
 * Pre-defined set of custom themeing object used in the Chakra-UI provider
 */
export default extendTheme(config);
