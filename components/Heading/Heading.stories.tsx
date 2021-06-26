import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import { Heading, Props } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;

const Template: Story<Props> = args => (
  <Box bgColor='red'>
    <Heading {...args} />
  </Box>
);

export const Header = Template.bind({});
Header.args = {
  type: 'Header',
  content: 'Nike React Sneakers',
};

export const SubHeader = Template.bind({});
SubHeader.args = {
  type: 'SubHeader',
  content: 'Pay in 4 interest free installements',
};
