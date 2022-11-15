import { useEffect, useState } from 'react';

type Link = string | undefined;

const useCurrentTabLink = (): Link => {
  const [link, setLink] = useState<Link>('');

  useEffect(() => {
    chrome.tabs.query(
      {
        currentWindow: true,
        active: true,
      },
      tab => {
        setLink(tab[0].url);
      }
    );
  }, []);

  return link;
};

export default useCurrentTabLink;
