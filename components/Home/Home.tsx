import * as React from 'react';
import { Flex, forwardRef } from '@chakra-ui/react';
import { SearchResults, Props as SearchResultsProps } from '../SearchResults';
import { Hero, Props as HeroProps } from '../Hero';

export interface Props extends SearchResultsProps, HeroProps {}

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
        <SearchResults
          mt='48px'
          brand={brand}
          categoreis={categoreis}
          totalProducts={totalProducts}
          numOfRetailers={numOfRetailers}
          products={products}
        />
      </Flex>
    );
  }
);

export { Home };
