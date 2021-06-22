import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';

import { customTheme, fonts } from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Global styles={fonts} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
