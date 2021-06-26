import * as React from 'react';
import { GetServerSideProps } from 'next';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { dehydrate } from 'react-query/hydration';
import { QueryClient, QueryFunctionContext, useQuery } from 'react-query';
import { Alert, Loading, Product } from 'components';
import { constants, helpers, types } from 'utils';

/**
 * Unique cache Key
 */
const QUERY_KEY = 'useProduct';

type SearchQueryKey = [
  string,
  {
    id: string;
  }
];

async function getProduct(context: QueryFunctionContext) {
  const { id } = (context.queryKey as SearchQueryKey)[1];
  const url = `${constants.API_DOAMIN}/search-results?product=${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new types.ResponseError(response.status);
  }
  return response.json();
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY, { id }], getProduct);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // This useQuery could just as well happen in some deeper child to
  // the "Posts"-page, data will be available immediately either way
  const { data, error, status } = useQuery<types.APIResponse, types.ResponseError>(
    [QUERY_KEY, { id }],
    getProduct
    // {
    //   cacheTime: CacheTimeout,
    // }
  );

  // Loading state
  if (status === 'loading') {
    return <Loading />;
  }

  // Error while trying to load the products from the API
  if (status === 'error') {
    return <Alert status='error'>{error?.message}</Alert>;
  }

  // No data was found
  if (data === undefined) {
    return null;
  }

  const productRecord = data.data.find(p => p.id === id);
  if (!productRecord) {
    return (
      <Alert status='info'>
        No product <strong>{id}</strong> was found
      </Alert>
    );
  }

  const product = helpers.mapAPIProductToUI(productRecord);

  return (
    <Box as='main'>
      <Product {...product} />;
    </Box>
  );
}
