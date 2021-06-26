import React from 'react';
import { Box, Flex, Image, ButtonGroup } from '@chakra-ui/react';
import { Button, Props as ButtonProps } from '../Button';
import { Heading } from '../Heading';

export interface Props {
  /**
   * Optional Main heading
   */
  heading?: string;
  /**
   * Optional sub Heading element
   */
  subHeading?: string;
  /**
   * Optional collection of items clickable
   */
  items?: ButtonProps[];
}

/**
 * Primary UI component for user interaction
 */
export const Hero: React.FC<Props> = ({ heading = '', subHeading = '', items = [] }) => {
  return (
    <Flex
      flexDir='row'
      justifyContent='space-between'
      alignItems='stretch'
      bgColor='#140CA3'
      pos='fixed'
      zIndex='100'
      top='0px'
      w='100%'
      height={{
        base: '200px',
        md: '400px',
        xl: '557px',
      }}
    >
      <Flex
        flexDir='column'
        justifyContent={{ base: 'flex-start', md: 'center' }}
        alignItems='flex-start'
        pl={{ base: '100px', md: '0px' }}
        ml={{
          base: '20px',
          md: '50px',
          xl: '155px',
        }}
        mt={{ base: '10px', md: '60px', xl: '168px' }}
        pt={{ base: '10px', md: '0px' }}
      >
        <Heading type='Header' content={heading} />
        <Heading type='SubHeader' content={subHeading} />
        <Box mt={{ base: '10px', md: '0px' }}>
          {/* Buttons collection */}
          <ButtonGroup variant='outline' spacing={{ base: '10px', md: '16px' }}>
            {items.map((item, index) => {
              return <Button key={index} onClick={item.onClick} content={item.content} />;
            })}
          </ButtonGroup>
        </Box>
      </Flex>
      <Image
        pos='absolute'
        display={{ base: 'none', md: 'block' }}
        top={{ md: '-70px', lg: '85px' }}
        height='473px'
        pt={{ md: '50px', lg: '0px' }}
        width={{ md: '500px', lg: '898.85px' }}
        zIndex='1'
        right='0px'
        src='assets/ellipsis.svg'
        alt='ellipsis'
      />
      <Flex justifyContent='flex-end' pt={{ base: '10px', md: '68px' }}>
        <Image
          src='/assets/nike.svg'
          display={{ base: 'none', md: 'block' }}
          w={{ md: '400px', lg: '568px' }}
          h='100%'
          alt='shoes logo'
          zIndex='100'
        />
      </Flex>
    </Flex>
  );
};
