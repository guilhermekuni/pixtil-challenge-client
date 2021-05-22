import { renderWithTheme } from 'utils/testHelper';

import FilterInput from '.';

describe('component FilterInput', () => {
  it('should render placeholder', () => {
    const { getByPlaceholderText } = renderWithTheme(
      <FilterInput customSize="sm" placeholder="filter by type" />
    );

    expect(getByPlaceholderText('filter by type')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderWithTheme(
      <FilterInput customSize="sm" placeholder="filter by type" />
    );

    expect(container).toMatchSnapshot();
  });
});
