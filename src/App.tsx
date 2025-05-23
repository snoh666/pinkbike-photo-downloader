import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Main from './pages/Main';
import { AnalyticsProvider } from './providers/analytics';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AnalyticsProvider>
        <GlobalStyles />
        <Main />
      </AnalyticsProvider>
    </ThemeProvider>
  );
};

export default App;
