import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, Props } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  content: 'This is a Layout content object Message',
  onClick: () => {},
};
