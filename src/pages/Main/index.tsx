import Basic from '../../layouts/Basic';
import DownloadContent from '../../components/DownloadContent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import useAnalytics from '../../hooks/useAnalytics';
import { useEffect } from 'react';

const Main = () => {
  const { sendEvent } = useAnalytics();

  useEffect(() => {
    sendEvent?.('pageView', {
      title: 'Main Page',
    });
  }, [sendEvent]);

  return (
    <Basic>
      <Header />
      <DownloadContent />
      <Footer />
    </Basic>
  );
};

export default Main;
