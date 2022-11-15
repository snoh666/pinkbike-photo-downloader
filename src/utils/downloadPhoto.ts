const getDownloadLink = (photoId: string): string => {
  return `http://ep1.pinkbike.org/p0pb${photoId}/p4pb${photoId}.jpg`;
};

const downloadPhoto = (photoId: string): void => {
  const downloadLink = getDownloadLink(photoId);

  chrome.tabs.create({
    url: downloadLink,
  });
};

export default downloadPhoto;
