import * as React from 'react';
import { Flex, forwardRef, SimpleGrid } from '@chakra-ui/react';
import { Product, Props as ProductProps } from '../Product';

export interface Item extends ProductProps {
  id: string;
}

export interface Props {
  products: Item[];
}

const SearchResults: React.FC<Props> = forwardRef<Props, 'div'>(({ products, ...rest }, ref) => {
  return (
    <SimpleGrid minChildWidth='250px' spacingX='24px' spacingY='41px' ref={ref} {...rest}>
      {products.map(product => {
        const { id, ...restProduct } = product;
        return <Product key={id} {...restProduct} />;
      })}
    </SimpleGrid>
  );
});

export { SearchResults };
