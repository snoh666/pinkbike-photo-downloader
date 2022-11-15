import React, { FC } from 'react';

import useDownloadHandler from '@hooks/useDownloadHandler';

import Container from './styles';

const DownloadContent: FC = () => {
  const { download, error } = useDownloadHandler();

  const handleDownload = () => download();

  return (
    <Container>
      <button onClick={handleDownload} type='button'>
        Download current iamge
      </button>
      <div>{error || <p>{error}</p>}</div>
    </Container>
  );
};

export default DownloadContent;
