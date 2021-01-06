const getPhotoIdFromLink = ( link: string ):string => {
  const linkArray = link.split('/');

  for (let i = 0; i < linkArray.length; i++) {
    if (linkArray[i] === 'www.pinkbike.com' || linkArray[i] === 'pinkbike.com') {
      if (linkArray[i + 1] === 'photo') {
        return linkArray[i + 2];
      }
    }
  }

  return '';
};

export default getPhotoIdFromLink;
