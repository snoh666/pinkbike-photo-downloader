# Pinkbike Photo Downloader

## Overview

Chromium extension to allow downloading highest quality (original size) images from pinkbike.com

## What problem does this extension solve?

If you’re not the owner of the image, you can only download resized versions of the image, sometimes those sizings are not really good to ur use case.

As an example this photo can only be downloaded as 1600x1067 and by using this extension we can download it original size which is 5511x3674

<img width="261" alt="image" src="https://user-images.githubusercontent.com/43639758/208632735-1592e4f4-8271-4e37-95e8-bdd23daa65c6.png">

and size that is accessible by default for us is not really the best fit for wallpapers as most of the devices now have bigger resolution sizes

Of course you can do that by hand ([Check next section](#how-to-download-manually)), but that was taking too much time for me, so I really wanted to speed up the process of downloading them.

## How to download manually

1. Get the photo id ( numbers after "/photo/" )
2. Copy it
3. Open new tab
4. Paste link provided below
5. Replace two times "{photoId}" with your photo id
6. Press enter
7. You have done it! It should start downloading photo in original size!

```
http://ep1.pinkbike.org/p0pb{photoId}/p4pb{photoId}.jpg
```

## License

(…)
