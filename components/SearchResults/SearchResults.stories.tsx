import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import { SearchResults, Props } from './SearchResults';

export default {
  title: 'SearchResults',
  component: SearchResults,
} as Meta;

const Template: Story<Props> = args => (
  <Box pl='20px' pt='20px' pr='20px'>
    <SearchResults {...args} />
  </Box>
);

export const Main = Template.bind({});
Main.args = {
  brand: 'Nike',
  categoreis: ['Air Max', 'Air Jordan', 'Flyknit', 'Airs'],
  totalProducts: 120,
  numOfRetailers: 8,
  products: [
    {
      id: '1',
      name: 'Nike Pegasus Trail 2 GORE-TEXT',
      retailerUrl: 'http://www.nike.com',
      price: '42.5',
      src: 'https://images.theurge.com/nike/fn86XOqgPpE680SVxWFFdrkn9gg=/main/3x/1035-1035/pink-nike-dri-fit-victory-womens-training-tank-1.jpg',
      numOfPayments: 4,
    },
    {
      id: '2',
      name: 'Nike Pegasus Trail 2 GORE-TEXT',
      retailerUrl: 'http://www.nike.com',
      price: '42.5',
      src: 'https://images.theurge.com/nike/Q16ECFRJ6GVKz0ggyagty18HNVQ=/main/2x/552-690/white-hyper-pink-summit-white-metallic-silver-nike-nike-air-max-verona-1.jpg',
      numOfPayments: 4,
    },
    {
      id: '3',
      name: 'Nike Pegasus Trail 2 GORE-TEXT',
      retailerUrl: 'http://www.nike.com',
      price: '42.5',
      src: 'https://images.theurge.com/nike/pC5-Yl6sHoB0Gm9CqAcwDg3JaWA=/main/2x/552-690/black-dark-smoke-grey-white-nike-nike-sportswear-swoosh-1.jpg',
      numOfPayments: 4,
    },
    {
      id: '4',
      name: 'Nike Pegasus Trail 2 GORE-TEXT',
      retailerUrl: 'http://www.nike.com',
      price: '42.5',
      src: 'https://images.theurge.com/nike/viXd-WP6rniAdb1xgngJMMRJzDY=/main/1x/276-345/black-black-black-nike-nike-sportswear-tech-pack-windrunner-1.jpg',
      numOfPayments: 4,
    },
    {
      id: '5',
      name: 'Nike Pegasus Trail 2 GORE-TEXT',
      retailerUrl: 'http://www.nike.com',
      price: '42.5',
      src: 'https://images.theurge.com/nike/KnCeFvJVba-8Xc9P2NfMkD_TiVk=/main/2x/690-690/blue-nike-dri-fit-victory-womens-golf-polo-1.jpg',
      numOfPayments: 4,
    },
    {
      id: '6',
      name: 'Nike Pegasus Trail 2 GORE-TEXT',
      retailerUrl: 'http://www.nike.com',
      price: '42.5',
      src: 'https://images.theurge.com/nike/uSlDfwgfZzouDvh0kPFmirDTddM=/main/1x/345-345/black-nike-x-olivia-kim-classic-padded-bra-1.jpg',
      numOfPayments: 4,
    },
    {
      id: '7',
      name: 'Nike Pegasus Trail 2 GORE-TEXT',
      retailerUrl: 'http://www.nike.com',
      price: '42.5',
      src: 'https://images.theurge.com/nike/WKT7L68_wSG3PMvR25vhLdqEWIQ=/main/1x/345-345/black-nike-air-women-s-fleece-hoodie-plus-1.jpg',
      numOfPayments: 4,
    },
    {
      id: '8',
      name: 'Nike Pegasus Trail 2 GORE-TEXT',
      retailerUrl: 'http://www.nike.com',
      price: '42.5',
      src: 'https://images.theurge.com/nike/fn86XOqgPpE680SVxWFFdrkn9gg=/main/3x/1035-1035/pink-nike-dri-fit-victory-womens-training-tank-1.jpg',
      numOfPayments: 4,
    },
    {
      id: '9',
      name: 'Nike Pegasus Trail 2 GORE-TEXT',
      retailerUrl: 'http://www.nike.com',
      price: '42.5',
      src: 'https://images.theurge.com/nike/Xn3-JALy8iSPMNkh-YszH-NL4qQ=/main/1x/345-345/grey-nike-sportswear-women-s-funnel-neck-1-2-zip-top-1.jpg',
      numOfPayments: 4,
    },
    {
      id: '10',
      name: 'Nike Pegasus Trail 2 GORE-TEXT',
      retailerUrl: 'http://www.nike.com',
      price: '42.5',
      src: 'https://images.theurge.com/nike/fn86XOqgPpE680SVxWFFdrkn9gg=/main/1x/345-345/pink-nike-dri-fit-victory-womens-training-tank-1.jpg',
      numOfPayments: 4,
    },
    {
      id: '11',
      name: 'Nike Pegasus Trail 2 GORE-TEXT',
      retailerUrl: 'http://www.nike.com',
      price: '42.5',
      src: 'https://images.theurge.com/stylerunner/NSrLwSdssOYeRQIbk-AEVcP19S8=/main/1x/230-345/nike-yoga-luxe-infinalon-cropped-tank-1.jpg',
      numOfPayments: 4,
    },
  ],
};
