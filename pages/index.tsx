import * as React from 'react';
import Head from 'next/head';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { Layout, Search } from 'components';

export default function IndexPage() {
  const defaultValue = '';
  const [userInput, setUserInput] = React.useState(defaultValue);

  const onReset = () => {
    setUserInput(defaultValue);
  };

  const onSubmit = (newValue: string) => {
    setUserInput(newValue);
  };

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
              <Search defaultValue='' onReset={onReset} onSubmit={onSubmit} />
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
