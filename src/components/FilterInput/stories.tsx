import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import FilterInput from '.';
import FilterInputProps from './interface';

export default {
  title: 'FilterInput',
  component: FilterInput,
  args: {
    customSize: 'md',
    placeholder: 'filter placeholder',
  },
} as Meta;

export const Basic: Story<FilterInputProps> = (args) => {
  const [filter, setFilter] = React.useState('');
  return (
    <FilterInput
      {...args}
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};
