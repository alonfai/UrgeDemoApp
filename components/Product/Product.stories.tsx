import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Product, Props } from './Product';
import { Box } from '@chakra-ui/react';

export default {
  title: 'Product',
  component: Product,
} as Meta;

const Template: Story<Props> = args => (
  <Box pl='20px' pt='20px'>
    <Product {...args} />
  </Box>
);

export const Main = Template.bind({});
Main.args = {
  name: 'Nike Pegasus Trail 2 GORE-TEXT',
  retailerUrl: 'http://www.nike.com',
  price: '42.5',
  src: 'https://images.theurge.com/nike/fn86XOqgPpE680SVxWFFdrkn9gg=/main/3x/1035-1035/pink-nike-dri-fit-victory-womens-training-tank-1.jpg',
  numOfPayments: 4,
};
