import useDownloadHandler from '../../hooks/useDownloadHandler';

import {
  Container,
  Button,
  ErrorMessage,
  InfoText,
  SpanPhotoId,
} from './styles';

const DownloadContent = () => {
  const { download, error, photoId } = useDownloadHandler();

  const handleDownload = () => download();

  return (
    <Container>
      <InfoText>
        Current photo id:&nbsp;
        <SpanPhotoId>{photoId || 'none'}</SpanPhotoId>
      </InfoText>
      <Button onClick={handleDownload} type='button' data-testid="download-image">
        <span>Download Image</span>
      </Button>
      <ErrorMessage>{error || <span>{error}</span>}</ErrorMessage>
    </Container>
  );
};

export default DownloadContent;
