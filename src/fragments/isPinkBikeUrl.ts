const isPinkBikeUrl = (url: string) => {
  if (!url.includes('pinkbike')) {
    return false;
  }
  if (!url.includes('/photo/')) {
    return false;
  }
  if (!url.includes('https')) {
    return false;
  }

  return true;
}

export default isPinkBikeUrl;
