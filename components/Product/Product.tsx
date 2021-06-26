import * as React from 'react';
import NextLink from 'next/link';
import { Flex, Image, Text, forwardRef, Link, LinkOverlay, LinkBox } from '@chakra-ui/react';

export interface Props {
  /**
   * Product Id
   */
  id: string;
  /**
   * Url of the product image based
   */
  src: string;
  /**
   * product name
   */
  name: string;
  /**
   * Retailer link
   */
  retailerUrl: string;
  /**
   * total price
   */
  price: string;
  /**
   * number of payments to use
   */
  numOfPayments: number;
}

const Product: React.FC<Props> = forwardRef<Props, 'div'>(
  ({ id, src, name, retailerUrl, price, numOfPayments, ...rest }, ref) => {
    return (
      <Flex flexDir='column' maxW='350px' fontStyle='normal' ref={ref} {...rest}>
        <LinkBox key={id}>
          <NextLink href={`/product/${23}`} passHref>
            <LinkOverlay>
              <Image
                borderRadius='15px'
                border='10px solid #FAF0E6'
                background='linear-gradient(0deg, rgba(235, 235, 235, 0.15), rgba(235, 235, 235, 0.15))'
                boxSize='border-box'
                w={{ base: '150px', md: '200px', lg: '264px' }}
                h={{ base: '200px', md: '300px', lg: '399px' }}
                src={src}
                alt={name}
              />
            </LinkOverlay>
          </NextLink>
        </LinkBox>
        <Text mt='22px' fontWeight='bold' fontSize='16px' lineHeight='130%' h='21px'>
          {name}
        </Text>
        <Link
          mt='3px'
          h='21px'
          fontSize='15px'
          fontWeight='500'
          lineHeight='140%'
          color='#140CA3'
          opacity='0.8'
          target='_blank'
          href={retailerUrl}
        >
          {retailerUrl}
        </Link>
        <Text mt='9px' h='20px' fontSize='20px' fontWeight='bold' lineHeight='130%' color='#000000'>
          ${price}
        </Text>
        <Text mt='15px' h='16px' fontSize='12px' lineHeight='130%' color='#525761' opacity='0.8'>
          ${price} split into {numOfPayments} payments
        </Text>
      </Flex>
    );
  }
);

export { Product };
