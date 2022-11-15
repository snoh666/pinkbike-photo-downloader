import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import Main from '@pages/Main';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
};

export default App;
