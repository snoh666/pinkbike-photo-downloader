import { useEffect, useState } from 'react';

import downloadPhoto from '../utils/downloadPhoto';
import getPhotoIdFromLink from '../utils/getPhotoIdFromLink';

import useCurrentTabLink from './useCurrentTabLink';

interface UseDownloadHandler {
  photoId?: string;
  error?: string;
  download: () => void;
}

const useDownloadHandler = (): UseDownloadHandler => {
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState<string | undefined>();

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

    downloadPhoto(photo);
  };

  return {
    download,
    photoId: photo,
    error,
  };
};

export default useDownloadHandler;
