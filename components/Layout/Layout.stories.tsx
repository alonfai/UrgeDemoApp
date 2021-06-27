import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Layout, Props } from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta;

const Template: Story<Props> = args => <Layout {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: 'This is a Layout content object Message',
};
