import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider } from '@chakra-ui/react';

import { types, constants } from 'utils';
import { customTheme, fonts } from 'styles';

/**
 * create query client object
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        // if api request for resouce not found, don't attempt to run a retry request. On other scenarios, try to re-run the request till max retries attempts reached
        return (error as types.ResponseError).Status !== constants.STATUS_CODES.NOT_FOUND
          ? failureCount < constants.MAX_API_RETRIES
          : false;
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Global styles={fonts} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
export default MyApp;
