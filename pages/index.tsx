import * as React from 'react';
import Head from 'next/head';
import { Box, Flex, Input, Button, ButtonGroup, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Layout } from 'components';
import { types } from 'utils';

export default function IndexPage() {
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
        {/* <Hero
          heading='Product catalog'
          subHeading='Search for items'
          items={[
            {
              content: 'Men',
              onClick: () => {},
            },
            {
              content: 'Women',
              onClick: () => {},
            },
          ]}
        /> */}
        <Layout>
          <VStack mt='20px' flex='1' pl='20px' pr='20px'>
            <Flex justifyContent='center' w='100%'>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <Input
                  defaultValue={''}
                  {...register('search', { required: true })}
                  placeholder='search brand...'
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
            </Flex>
            <Box pos='relative' top='150px'>
              {/* {userInput && <SearchResults userInput={userInput} />} */}
            </Box>
          </VStack>
        </Layout>
      </Box>
    </>
  );
}
