const isPinkBikePhotoUrl = (url: string): boolean => {
  if (!url.includes('pinkbike')) return false;
  if (!url.includes('/photo/')) return false;
  if (!url.includes('https')) return false;

  const routes = url.split('/');
  if (!routes.length) return false;
  const foundPhotoIndex = routes.findIndex(i => i === 'photo');
  if (!foundPhotoIndex && foundPhotoIndex !== 0) return false;
  const photoIndex = foundPhotoIndex + 1;

  if (!photoIndex && photoIndex !== 0) return false;
  const photoId = routes[photoIndex];
  if (!photoId) return false;
  if (!photoId.match(/^[0-9]*$/)) return false;

  return true;
};

export default isPinkBikePhotoUrl;
