import * as React from 'react';
import Head from 'next/head';
import { Box, Flex, Input, Button, ButtonGroup, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Hero, Layout } from 'components';
// import { SearchResults } from 'components/SearchResults';
import { types } from 'utils';
// import Image from 'next/image';

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
        <Layout>
          <Hero
            heading='Product catalog'
            subHeading='Search for items'
            menuItems={[
              {
                id: '1',
                title: 'Men',
                onClick: () => {},
              },
              {
                id: '2',
                title: 'Women',
                onClick: () => {},
              },
            ]}
          />
          <VStack flex='1' mt={{ base: '200px', md: '430px', lg: '557px' }} pl='20px' pr='20px'>
            <Flex
              pos='fixed'
              justifyContent='center'
              w='100%'
              pt='20px'
              pb='20px'
              zIndex='100'
              bgColor='white'
            >
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
