import { getByPlaceholderText } from '@testing-library/dom';
import React from 'react';

import { renderWithTheme } from 'utils/testHelper';

import FilterInput from '.';

describe('component FilterInput', () => {
  it('should render placeholder', () => {
    const { getByPlaceholderText } = renderWithTheme(
      <FilterInput customSize="sm" placeholder="filter by type" />
    );

    expect(getByPlaceholderText('filter by type')).toBeInTheDocument();
  });
});
