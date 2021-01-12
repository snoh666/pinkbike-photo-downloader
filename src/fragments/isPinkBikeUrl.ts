const isPinkBikeUrl = (url: string) => {
  if (!url.includes('pinkbike')) return false;
  if (!url.includes('/photo/')) return false;
  if (!url.includes('https')) return false;

  const routes = url.split('/');
  if (!routes.length) return false;
  const photoIndex = routes.findIndex((value: string) => value === 'photo');

  if (!photoIndex && photoIndex !== 0) return false;
  const photoId = routes[photoIndex];
  if (!photoId) return false;
  if (!photoId.match(/^[0-9]*$/)) return false;

  return photoId.length === 8;
}

export default isPinkBikeUrl;
