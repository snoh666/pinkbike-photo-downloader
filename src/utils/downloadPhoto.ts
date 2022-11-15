const getDownloadLink = ( photoId: string ) => {
  return `http://ep1.pinkbike.org/p0pb${photoId}/p4pb${photoId}.jpg`;
}

const downloadPhoto = ( photoId: string ) => {
  const downloadLink = getDownloadLink(photoId);

  chrome.tabs.create({
    url: downloadLink,
  });
};

export default downloadPhoto;
