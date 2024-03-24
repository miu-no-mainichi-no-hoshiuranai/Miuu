window.onload = function() {
    var images = [
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/1.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/2.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/3.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/4.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/5.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/6.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/7.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/8.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/9.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/10.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/11.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/12.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/13.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/14.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/15.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/16.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/17.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/18.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/19.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/20.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/21.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/22.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/23.webp',
    'https://cdn.jsdelivr.net/gh/miu-no-mainichi-no-hoshiuranai/Miuu/src/24.webp'
    ];
    var randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('random-image').src = randomImage;
}
