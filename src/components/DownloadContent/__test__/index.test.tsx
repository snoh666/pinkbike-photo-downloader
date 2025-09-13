import { render, screen, userEvent, waitFor } from '@testing';
import DownloadContent from '..';

describe('Components / Download Content', () => {
  it('should render current photo id correctly', async () => {
    jest
      .spyOn(chrome.tabs, 'query')
      .mockResolvedValue([
        { url: 'https://www.pinkbike.com/photo/123456/' } as chrome.tabs.Tab,
      ]);

    render(<DownloadContent />);

    expect(screen.getByText('Current photo id:')).toBeVisible();
    expect(await screen.findByText('123456')).toBeVisible();
  });

  it('should render "none" when no photo id is found', async () => {
    jest
      .spyOn(chrome.tabs, 'query')
      .mockResolvedValue([
        { url: 'https://www.pinkbike.com/' } as chrome.tabs.Tab,
      ]);

    render(<DownloadContent />);

    expect(screen.getByText('Current photo id:')).toBeVisible();
    expect(await screen.findByText('none')).toBeVisible();
  });

  it('should open new tab when download button is clicked', async () => {
    jest
      .spyOn(chrome.tabs, 'query')
      .mockResolvedValue([
        { url: 'https://www.pinkbike.com/photo/123456/' } as chrome.tabs.Tab,
      ]);

    const photoId = '123456';
    const expectedDownloadLink = `http://ep1.pinkbike.org/p0pb${photoId}/p4pb${photoId}.jpg`;

    const createFn = jest.fn();
    jest.spyOn(chrome.tabs, 'create').mockImplementation(createFn);

    render(<DownloadContent />);

    expect(await screen.findByText('123456')).toBeVisible();

    const downloadButton = screen.getByTestId('download-image');
    expect(downloadButton).toBeVisible();

    userEvent.click(downloadButton);

    await waitFor(() => {
      expect(createFn).toHaveBeenCalledWith({
        url: expectedDownloadLink,
      });
    });
  });

  it('should show error message when no photo id is found', async () => {
    jest
      .spyOn(chrome.tabs, 'query')
      .mockResolvedValue([
        { url: 'https://www.pinkbike.com/' } as chrome.tabs.Tab,
      ]);

    const createFn = jest.fn();
    jest.spyOn(chrome.tabs, 'create').mockImplementation(createFn);

    render(<DownloadContent />);

    expect(await screen.findByText('none')).toBeVisible();

    const downloadButton = screen.getByTestId('download-image');
    expect(downloadButton).toBeVisible();

    userEvent.click(downloadButton);

    expect(
      await screen.findByText('No pinkbike photo detected to download')
    ).toBeVisible();

    expect(createFn).toHaveBeenCalledTimes(0);
  });
});
