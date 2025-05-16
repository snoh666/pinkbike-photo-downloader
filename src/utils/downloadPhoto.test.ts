import downloadPhoto from './downloadPhoto';

const chrome = {
    tabs: {
        create: jest.fn(),
    },
};

describe('Utils / downloadPhoto', () => {
  it('should return the correct download link', () => {
    Object.assign(global, { chrome });

    const photoId = '123456';
    const expectedLink = `http://ep1.pinkbike.org/p0pb${photoId}/p4pb${photoId}.jpg`;

    downloadPhoto(photoId);

    expect(chrome.tabs.create).toHaveBeenCalledWith({
      url: expectedLink,
    });
  });
});
