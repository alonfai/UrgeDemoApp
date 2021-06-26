import * as React from 'react';
import { Flex, forwardRef, SimpleGrid } from '@chakra-ui/react';
import { Product, Props as ProductProps } from '../Product';
import { SearchResultsHeading, Props as SearchResultsHeadingProps } from '../SearchResultsHeading';

export interface Item extends ProductProps {
  id: string;
}

export interface Props extends SearchResultsHeadingProps {
  products: Item[];
}

const SearchResults: React.FC<Props> = forwardRef<Props, 'div'>(
  ({ products, categoreis, brand, numOfRetailers, totalProducts, ...rest }, ref) => {
    return (
      <>
        <SearchResultsHeading
          brand={brand}
          categoreis={categoreis}
          totalProducts={totalProducts}
          numOfRetailers={numOfRetailers}
        />
        <SimpleGrid
          mt='26px'
          minChildWidth='250px'
          spacingX='24px'
          spacingY='41px'
          ref={ref}
          {...rest}
        >
          {products.map(product => {
            const { id, ...restProduct } = product;
            return <Product key={id} {...restProduct} />;
          })}
        </SimpleGrid>
      </>
    );
  }
);

export { SearchResults };
