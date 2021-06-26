import * as React from 'react';
import Head from 'next/head';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { Hero, Search, SearchResultsWrapper } from 'components';

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
      <Hero
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
      />
      <VStack as='main' mt='20px' pl='20px' pr='20px' alignItems='stretch'>
        <Flex justifyContent='center' w='100%'>
          <Search defaultValue='' onReset={onReset} onSubmit={onSubmit} />
        </Flex>
        <Box mt='20px'>{userInput && <SearchResultsWrapper userInput={userInput} />}</Box>
      </VStack>
    </>
  );
}
