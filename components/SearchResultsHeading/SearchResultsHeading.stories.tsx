import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import { SearchResultsHeading, Props } from './SearchResultsHeading';

export default {
  title: 'Components/SearchResultsHeading',
  component: SearchResultsHeading,
} as Meta;

const Template: Story<Props> = args => (
  <Box pl='20px' pt='20px' pr='20px'>
    <SearchResultsHeading {...args} />
  </Box>
);

export const Main = Template.bind({});
Main.args = {
  brand: 'Nike',
  categoreis: ['Air Max', 'Air Jordan', 'Flyknit', 'Airs'],
  totalProducts: 120,
  numOfRetailers: 8,
};
