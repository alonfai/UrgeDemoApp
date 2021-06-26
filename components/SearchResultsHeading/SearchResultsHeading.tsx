import * as React from 'react';
import { Flex, Text, forwardRef, Box } from '@chakra-ui/react';
import { Product, Props as ProductProps } from '../Product';

export interface Props {
  /**
   * brand name
   */
  brand: string;
  /**
   * brand list of products
   */
  categoreis: string[];
  /**
   * total search results product count
   */
  totalProducts: number;
  /**
   * number of retailers offering this products in the system
   */
  numOfRetailers: number;
}

const SearchResultsHeading: React.FC<Props> = forwardRef<Props, 'div'>(
  ({ brand, categoreis, totalProducts, numOfRetailers, ...rest }, ref) => {
    return (
      <Flex
        h={{ base: '60px', md: '28px' }}
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'flex-start', md: 'space-between' }}
        ref={ref}
        {...rest}
      >
        <Box
          display='flex'
          fontSize='20px'
          fontStyle='normal'
          lineHeight='140%'
          fontWeight='bold'
          overflow='hidden'
          whiteSpace='nowrap'
          textOverflow='ellipsis'
          mb={{ base: '10px', md: '0px' }}
          maxW={{ md: '400px' }}
        >
          <Text color='black' opacity='0.75'>
            More from {brand} -
          </Text>
          <Text color='#140CA3' opacity='0.75'>
            {categoreis.join(', ')}
          </Text>
        </Box>
        <Text fontSize='18px' lineHeight='140%' color='#525761' opacity='0.8'>
          {totalProducts} products from {numOfRetailers} Retailers
        </Text>
      </Flex>
    );
  }
);

export { SearchResultsHeading };
