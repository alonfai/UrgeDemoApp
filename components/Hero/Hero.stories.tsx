import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Hero, Props } from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
} as Meta;

const Template: Story<Props> = args => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  heading: 'Nike React Sneakers',
  subHeading: 'Pay in 4 interest-free installements.',
  items: [
    {
      content: 'Men',
      onClick: () => {},
    },
    {
      content: 'Women',
      onClick: () => {},
    },
  ],
};

export const LongText = Template.bind({});
LongText.args = {
  heading: 'Nike React Sneakers and Holdings',
  subHeading: 'Pay in 4 interest-free installments.',
  items: [
    {
      content: 'Men',
      onClick: () => {},
    },
    {
      content: 'Women',
      onClick: () => {},
    },
  ],
};
