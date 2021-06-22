import * as React from 'react';
import { Flex, Spinner, Text, forwardRef, FlexProps } from '@chakra-ui/react';

export type Props = FlexProps & {
  /**
   * Optional text to display on loading (defaults to "Loading...")
   */
  text?: string;
};

const Loading: React.FC<Props> = forwardRef<Props, 'div'>(function Loading(
  { text = 'Loading...', ...rest },
  ref
) {
  return (
    <Flex
      ref={ref}
      alignItems='center'
      justify='center'
      flexBasis='1'
      height='100%'
      width='100%'
      {...rest}
    >
      <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
      {text && <Text pl='5'>{text}</Text>}
    </Flex>
  );
});

export { Loading };
