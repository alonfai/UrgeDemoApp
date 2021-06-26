import * as React from 'react';
import { Heading } from '@chakra-ui/react';
import { Alert } from 'components';

export default function Custom404() {
  return (
    <Heading as='h1'>
      <Alert status='info'>Not found</Alert>
    </Heading>
  );
}
