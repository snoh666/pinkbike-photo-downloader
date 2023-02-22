import useDownloadHandler from '@hooks/useDownloadHandler';

import { Container, Button, ErrorMessage } from './styles';

const DownloadContent = () => {
  const { download, error } = useDownloadHandler();

  const handleDownload = () => download();

  return (
    <Container>
      <Button onClick={handleDownload} type='button'>
        Download current image
      </Button>
      <ErrorMessage>{error || <span>{error}</span>}</ErrorMessage>
    </Container>
  );
};

export default DownloadContent;
