import React from 'react';
import { Button as ChakraButton, forwardRef } from '@chakra-ui/react';

export interface Props {
  /**
   * button internal content
   */
  content: React.ReactNode;
  /**
   * On click event
   */
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = forwardRef<Props, 'button'>(
  ({ content, onClick, ...rest }, ref) => {
    return (
      <ChakraButton
        w={{ base: '100px', xl: '132px' }}
        borderRadius='4px'
        height={{ base: '20px', md: '30px', xl: '43px' }}
        pt='12'
        pb='12'
        fontSize='16px'
        fontWeight='bold'
        lineHeight='120%'
        bgColor='#FFFFFF'
        color='#140CA3'
        onClick={onClick}
        ref={ref}
        {...rest}
      >
        {content}
      </ChakraButton>
    );
  }
);

export { Button };
