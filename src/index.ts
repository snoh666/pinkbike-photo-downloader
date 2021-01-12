import './styles/style.scss';
import outputErrorMessage from "./fragments/outputErrorMessage";
import getPhotoIdFromLink from "./fragments/getPhotoIdFromLink";
import isPinkBikePhotoUrl from "./fragments/isPinkBikePhotoUrl";
import downloadPhoto from "./fragments/downloadPhoto";

document.addEventListener('DOMContentLoaded', () => {
  const button:HTMLButtonElement = document.querySelector('button#pink-bike-downloader-download');

  button.addEventListener('click', () => {
    try {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, (currentTab) => {
        const currentUrl = currentTab[0].url;
        const photoId = getPhotoIdFromLink(currentUrl);

        if (!isPinkBikePhotoUrl(currentUrl)) {
          outputErrorMessage(`Wrong window url, does not match known pink bike site`);
          return;
        }

        if (!photoId) {
          outputErrorMessage(`Wrong photoId get: photoId: ${photoId}`);
          return;
        }

        downloadPhoto(photoId);
      });
    } catch (e) {
      outputErrorMessage('Something went wrong');
    }
  });
});
