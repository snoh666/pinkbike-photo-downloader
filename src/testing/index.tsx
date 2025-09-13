import '@testing-library/jest-dom';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import React from 'react';

function render(ui: React.ReactElement, options?: Parameters<typeof rtlRender>[1]) {
  return rtlRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
}

export * from '@testing-library/react';
export { render };
export { default as userEvent } from '@testing-library/user-event';
