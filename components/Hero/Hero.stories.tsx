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
    },
    {
      id: '2',
      title: 'Women',
    },
  ],
};
