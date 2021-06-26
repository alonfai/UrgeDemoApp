import * as React from 'react';
import { Box, Flex, forwardRef } from '@chakra-ui/react';
import { SearchResults, Props as SearchResultsProps } from '../SearchResults';
import { Hero, Props as HeroProps } from '../Hero';
import { SearchResultsHeading, Props as SearchResultsHeadingPrps } from '../SearchResultsHeading';

export interface Props extends SearchResultsProps, SearchResultsHeadingPrps, HeroProps {}

const Home: React.FC<Props> = forwardRef<Props, 'div'>(
  (
    {
      products,
      categoreis,
      brand,
      numOfRetailers,
      totalProducts,
      heading,
      subHeading,
      items,
      ...rest
    },
    ref
  ) => {
    return (
      <Flex flexDir='column' alignItems='stretch'>
        <Hero heading={heading} subHeading={subHeading} items={items} />
        <Box mt='48px'>
          <SearchResultsHeading
            brand={brand}
            categoreis={categoreis}
            totalProducts={totalProducts}
            numOfRetailers={numOfRetailers}
          />
          <SearchResults products={products} />
        </Box>
      </Flex>
    );
  }
);

export { Home };
