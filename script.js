window.onload = function() {
    var images = [
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src/1.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//2.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//3.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//4.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//5.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//6.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//7.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//8.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//9.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//10.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//11.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//12.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//13.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//14.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//15.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//16.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//17.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//18.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//19.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//20.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//21.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//22.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//23.webp',
    'https://gitee.com/miu-no-mainichi-no-hoshiuranai/Miuu/raw/main/src//24.webp',
    ];
    var randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('random-image').src = randomImage;
}
