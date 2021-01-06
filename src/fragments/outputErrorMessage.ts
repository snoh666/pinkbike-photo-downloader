const outputErrorMessage = (errorMessage: string) => {
  const errorContainer = document.querySelector('p#error-message-container');

  errorContainer.innerHTML = errorMessage;
};


export default outputErrorMessage;
