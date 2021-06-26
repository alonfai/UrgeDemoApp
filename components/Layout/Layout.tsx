import * as React from 'react';
import { Flex } from '@chakra-ui/react';

export type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Flex alignItems='center' justifyContent='center'>
      {children}
    </Flex>
  );
};

export { Layout };
