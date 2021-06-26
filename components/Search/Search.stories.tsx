import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import { Search, Props } from './Search';

export default {
  title: 'Components/Search',
  component: Search,
} as Meta;

const Template: Story<Props> = args => (
  <Box pt='20px' pl='20px' pr='20px'>
    <Search {...args} />
  </Box>
);

export const Main = Template.bind({});
Main.args = {
  onReset: () => {},
  onSubmit: () => {},
  defaultValue: '',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  ...Main.args,
  defaultValue: 'This is a value',
};
