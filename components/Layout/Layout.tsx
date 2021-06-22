import * as React from 'react';
import { Flex } from '@chakra-ui/react';

export type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Flex flexWrap='wrap' alignItems='center' justifyContent='center' mt='10'>
      {children}
    </Flex>
  );
};

export { Layout };
