import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Alert, Props } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: Story<Props> = args => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  status: 'info',
  title: 'Header',
  children: 'Alert Message',
};

export const Error = Template.bind({});
Error.args = {
  status: 'error',
  title: 'Header',
  children: 'Alert Message',
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
  title: 'Header',
  children: 'Alert Message',
};

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  title: 'Header',
  children: 'Alert Message',
};
