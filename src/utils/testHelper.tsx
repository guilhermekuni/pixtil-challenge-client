import React from 'react';
import { ThemeProvider } from 'styled-components';

import { render } from '@testing-library/react';

import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

export const renderWithTheme = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
