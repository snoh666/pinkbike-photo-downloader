import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import useDownloadHandler from '@hooks/useDownloadHandler';

const App: React.FC = () => {
  const { download, error } = useDownloadHandler();

  const handleDownload = () => download();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={handleDownload} type='button'>
        Download current iamge
      </button>
      {error || <p>{error}</p>}
    </ThemeProvider>
  );
};

export default App;
