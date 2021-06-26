import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box } from '@chakra-ui/react';
import { useSearch } from 'hooks';
import { Alert } from '../Alert';
import { Loading } from '../Loading';
import { Product, Props as ProductProps } from '../Product';
import { SearchResultsHeading } from '../SearchResultsHeading';

export type Props = {
  /**
   * user data
   */
  userInput: string;
};

const SearchResultsWrapper: React.FC<Props> = ({ userInput }) => {
  const { data, error, fetchNextPage, hasNextPage, status } = useSearch(userInput);

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

  // set the length of the data.This will unlock the subsequent calls to next.
  const dataLength = data.pages.reduce((counter, page) => {
    return counter + page.data.length;
  }, 0);

  return (
    <Box mt='5px'>
      {dataLength === 0 && <Alert status='info'>No results were found</Alert>}
      {dataLength > 0 && (
        <SearchResultsHeading
          brand={'Nike'}
          categoreis={['Air Max', 'Air Jordan', 'Flyknit', 'Airs']}
          totalProducts={120}
          numOfRetailers={8}
        />
      )}
      <InfiniteScroll
        dataLength={dataLength}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Loading />}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gridColumnGap: '24px',
          gridRowGap: '41px',
          marginTop: '26px',
        }}
      >
        {data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.data.map(product => {
              const props: ProductProps = {
                id: product.id ?? '',
                price: product.attributes.sale_price?.toString() ?? '0',
                name: product.attributes.product_name,
                numOfPayments: product.attributes.e_payment_options?.length ?? 0,
                retailerUrl: product.attributes.retailer_url,
                src: product.attributes.e_image_urls_search_jpg[0][0],
              };
              return <Product key={props.id} {...props} />;
            })}
          </React.Fragment>
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export { SearchResultsWrapper };
