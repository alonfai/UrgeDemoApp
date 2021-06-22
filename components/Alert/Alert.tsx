import * as React from 'react';
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  forwardRef,
  AlertProps,
  AlertStatus,
} from '@chakra-ui/react';

export type Props = AlertProps & {
  status: AlertStatus;
  /**
   * Optional Error title message (defaults to empty)
   */
  title?: string;
};

const Alert: React.FC<Props> = forwardRef<Props, 'div'>(
  ({ title, status, children, ...rest }, ref) => {
    return (
      <ChakraAlert
        ref={ref}
        status={status}
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
        {...rest}
      >
        <AlertIcon boxSize='40px' mr={0} />
        {title && (
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            {title}
          </AlertTitle>
        )}
        <AlertDescription maxWidth='sm'>{children}</AlertDescription>
      </ChakraAlert>
    );
  }
);

export { Alert };
