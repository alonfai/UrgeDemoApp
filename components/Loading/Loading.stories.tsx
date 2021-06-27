import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Loading, Props } from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta;

const Template: Story<Props> = args => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: undefined,
};

export const Main = Template.bind({});
Main.args = {
  ...Default.args,
  text: 'Loading item',
};
