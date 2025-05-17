import { useContext } from 'react';
import analytics from '../providers/analytics';

const useAnalytics = () => {
  return useContext(analytics.AnalyticsContext);
};

export default useAnalytics;
