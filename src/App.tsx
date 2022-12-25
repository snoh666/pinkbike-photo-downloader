import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import Main from '@pages/Main';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
};

export default App;
