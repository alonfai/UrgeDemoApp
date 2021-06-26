import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Heading, Props } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
} as Meta;

const Template: Story<Props> = args => <Heading bgColor='red' {...args} />;

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
