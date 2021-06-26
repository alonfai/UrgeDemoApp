import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider } from '@chakra-ui/react';
import { types, constants } from 'utils';
import { customTheme } from 'styles';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

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
  // Adding Chakra UI Context together with React-Query Provider for SSR with Next.js (https://react-query-v2.tanstack.com/docs/guides/ssr)
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
export default MyApp;
