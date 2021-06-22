import * as React from 'react';
import Head from 'next/head';
import { Box, Input, Button, ButtonGroup, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Layout } from 'components';
import { SearchResults } from 'components/SearchResults';
import { types } from 'utils';
// import Image from 'next/image';

export default function Home() {
  const [userInput, setUserInput] = React.useState('');
  const defaultValues: types.FormValues = {
    search: '',
  };
  const { register, handleSubmit, reset, watch } = useForm<types.FormValues>({
    defaultValues,
  });

  const onSubmit = (data: types.FormValues) => {
    setUserInput(data.search);
  };
  const onReset = () => {
    reset();
    setUserInput('');
  };

  const { search } = watch();

  return (
    <>
      <Head>
        <title>Products Catalog</title>
        <meta name='description' content='List of different products catalog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box as='main'>
        <Layout>
          <VStack minW='600px' spacing='15'>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <Input
                defaultValue={''}
                {...register('search', { required: true })}
                autoComplete='off'
              />
              {/* Buttons collection */}
              <ButtonGroup variant='outline' spacing='6' mt='5'>
                <Button colorScheme='orange' type='submit' disabled={!search}>
                  Search...
                </Button>
                <Button colorScheme='red' onClick={onReset}>
                  Clear
                </Button>
              </ButtonGroup>
            </form>
            {userInput && <SearchResults userInput={userInput} />}
          </VStack>
        </Layout>
      </Box>
    </>
  );
}
