import { useEffect, useState } from 'react';

type Link = string | undefined;

const useCurrentTabLink = (): Link => {
  const [link, setLink] = useState<Link>('');

  useEffect(() => {
    const updateLink = async () => {
      const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true,
      });
      setLink(tabs[0].url);
    };

    updateLink();
  }, []);

  return link;
};

export default useCurrentTabLink;
