window.onload = function() {
    var images = [
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/1.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/2.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/3.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/4.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/5.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/6.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/7.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/8.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/9.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/10.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/11.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/12.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/13.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/14.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/15.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/16.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/17.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/18.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/19.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/20.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/21.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/22.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/23.webp',
    'https://github.com/miu-no-mainichi-no-hoshiuranai/Miuu/blob/main/src/24.webp',
    ];
    var randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('random-image').src = randomImage;
}
