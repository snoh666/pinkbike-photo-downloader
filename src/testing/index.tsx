import '@testing-library/jest-dom';
import { render as rtlRender, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import React from 'react';

function render(
  ui: React.ReactElement,
  options?: Parameters<typeof rtlRender>[1]
) {
  return rtlRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
}

export { render, screen, fireEvent };
export { default as userEvent } from '@testing-library/user-event';
