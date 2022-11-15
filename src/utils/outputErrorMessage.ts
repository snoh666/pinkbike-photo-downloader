const outputErrorMessage = (errorMessage: string) => {
  const errorContainer = document.querySelector('p#error-message-container');

  if (errorContainer) {
    errorContainer.innerHTML = errorMessage;
  }
};

export default outputErrorMessage;
