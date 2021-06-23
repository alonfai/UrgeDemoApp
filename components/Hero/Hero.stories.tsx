import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Hero, HeroProps } from './Hero';

export default {
  title: 'Hero',
  component: Hero,
} as Meta;

const Template: Story<HeroProps> = args => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  heading: 'Nike React Sneakers',
  subHeading: 'Pay in 4 interest-free installements.',
  menuItems: [
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
  ],
};

export const LongText = Template.bind({});
LongText.args = {
  heading: 'Nike React Sneakers and Holdings',
  subHeading: 'Pay in 4 interest-free installments.',
  menuItems: [
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
  ],
};
