const getPhotoIdFromLink = (link: string): string | undefined => {
  const linkArray = link.split('/');

  return linkArray.find((part, idx) => {
    if (part === 'www.pinkbike.com' || part === 'pinkbike.com') {
      if (linkArray[idx + 1] === 'photo') {
        return linkArray[idx + 2];
      }
    }

    return false;
  });
};

export default getPhotoIdFromLink;
