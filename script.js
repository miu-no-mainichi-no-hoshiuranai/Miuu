window.onload = function() {
    var images = [
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src/1.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//2.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//3.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//4.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//5.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//6.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//7.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//8.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//9.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//10.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//11.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//12.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//13.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//14.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//15.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//16.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//17.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//18.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//19.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//20.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//21.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//22.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//23.webp',
    'https://raw.githubusercontent.com/miu-no-mainichi-no-hoshiuranai/Miuu/main/src//24.webp',
    ];
    var randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('random-image').src = randomImage;
}
