import React from 'react';
import { Box, forwardRef } from '@chakra-ui/react';

export interface Props {
  /**
   * Type of the text
   */
  type: 'Header' | 'SubHeader';
  /**
   * button internal content
   */
  content: React.ReactNode;
}

const Heading: React.FC<Props> = forwardRef<Props, 'div'>(({ type, content, ...rest }, ref) => {
  let fontSize, height;
  switch (type) {
    case 'Header':
      fontSize = { base: '20px', md: '32px', xl: '64px' };
      height = { base: '20px', md: '50px', xl: '70px' };
      break;
    case 'SubHeader':
      fontSize = { base: '16px', md: '26px', xl: '30px' };
      height = { base: '20px', md: '50px', xl: '70px' };
      break;
  }
  return (
    <Box
      height={height}
      color='#ffffff'
      fontSize={fontSize}
      as={type === 'Header' ? 'h1' : 'h2'}
      lineHeight={type === 'Header' ? '1' : '120%'}
      fontWeight={type === 'Header' ? 'bold' : 'normal'}
      overflow='hidden'
      whitespace='nowrap'
      textOverflow='ellipsis'
      ref={ref}
      {...rest}
    >
      {content}
    </Box>
  );
});

export { Heading };
