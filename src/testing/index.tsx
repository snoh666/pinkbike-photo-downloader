import '@testing-library/jest-dom';
import {
  render as rtlRender,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import React from 'react';
import { AnalyticsContext } from 'src/providers/analytics';

function render(
  ui: React.ReactElement,
  options?: Parameters<typeof rtlRender>[1]
) {
  return rtlRender(
    <ThemeProvider theme={theme}>
      <AnalyticsContext.Provider
        value={{ sendEvent: jest.fn(() => Promise.resolve()) }}
      >
        {ui}
      </AnalyticsContext.Provider>
    </ThemeProvider>,
    options
  );
}

export { render, screen, fireEvent, waitFor };
export { default as userEvent } from '@testing-library/user-event';
