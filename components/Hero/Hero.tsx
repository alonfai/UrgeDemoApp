import React from 'react';
import { Box, Flex, Text, Image, ButtonGroup, Button, baseStyle } from '@chakra-ui/react';

export interface MenuItem {
  id?: string;
  title: string;
  onClick: () => void;
}

export interface HeroProps {
  heading: string;

  subHeading: string;

  menuItems: MenuItem[];
}

/**
 * Primary UI component for user interaction
 */
export const Hero: React.FC<HeroProps> = ({ heading, subHeading, menuItems }) => {
  return (
    <Flex
      justifyContent='flex-end'
      alignItems='stretch'
      bgColor='#140CA3'
      h='557px'
      fontFamily='RocGrotesk'
    >
      <Flex position='absolute' flexDir='column' top='168px' left='155px'>
        <Box
          height='70px'
          color='#ffffff'
          fontSize='64px'
          lineHeight='100%'
          fontWeight='bold'
          maxW='800px'
          overflow='hidden'
        >
          {heading}
        </Box>
        <Box
          height='70px'
          width='576px'
          fontSize='30px'
          lineHeight='120%'
          color='#ffffff'
          fontStyle='normal'
        >
          {subHeading}
        </Box>
        {/* Buttons collection */}
        <ButtonGroup variant='outline' spacing='16'>
          {menuItems.map((item, index) => {
            return (
              <Button
                w='132px'
                borderRadius='4px'
                height='43px'
                pt='12'
                pb='12'
                key={item.id ?? index}
                fontSize='16px'
                fontWeight='bold'
                lineHeight='120%'
                bgColor='#FFFFFF'
                color='#140CA3'
                onClick={item.onClick}
              >
                {item.title}
              </Button>
            );
          })}
        </ButtonGroup>
      </Flex>
      <Box>
        <Image
          pos='absolute'
          right='15px'
          top='100px'
          height='473px'
          width='898.85px'
          src='assets/ellipsis.png'
          alt='ellipsis'
        />
        <Image
          float='right'
          pos='absolute'
          right='15px'
          top='72px'
          height='500px'
          width='790px'
          src='assets/nike.png'
          alt='shoes logo'
          zIndex='100'
        />
      </Box>
    </Flex>
  );
};
