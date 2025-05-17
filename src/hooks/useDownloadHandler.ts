import { useEffect, useState } from 'react';

import downloadPhoto from '../utils/downloadPhoto';
import getPhotoIdFromLink from '../utils/getPhotoIdFromLink';

import useCurrentTabLink from './useCurrentTabLink';
import useAnalytics from './useAnalytics';

interface UseDownloadHandler {
  photoId?: string;
  error?: string;
  download: () => void;
}

const useDownloadHandler = (): UseDownloadHandler => {
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState<string | undefined>();
  const { sendEvent } = useAnalytics();

  const link = useCurrentTabLink();

  useEffect(() => {
    if (!link) return;

    const id = getPhotoIdFromLink(link);
    if (!id) return;

    setPhoto(id);
  }, [link]);

  const download = () => {
    if (!photo) {
      setError('No pinkbike photo detected to download');
      return;
    }

    sendEvent?.('downloadImage', {
      id: photo,
    }).then(() => {
      downloadPhoto(photo);
    });
  };

  return {
    download,
    photoId: photo,
    error,
  };
};

export default useDownloadHandler;
