import downloadPhoto from './downloadPhoto';

describe('Utils / downloadPhoto', () => {
  it('should return the correct download link', () => {
    jest.spyOn(global.chrome.tabs, 'create').mockImplementation(jest.fn());

    const photoId = '123456';
    const expectedLink = `http://ep1.pinkbike.org/p0pb${photoId}/p4pb${photoId}.jpg`;

    downloadPhoto(photoId);

    expect(global.chrome.tabs.create).toHaveBeenCalledWith({
      url: expectedLink,
    });
  });
});
