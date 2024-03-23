window.onload = function() {
    var s = [
        'src/1.webp',
        'src/2.webp',
        'src/3.webp',
        'src/4.webp',
        'src/5.webp',
        'src/6.webp',
        'src/7.webp',
        'src/8.webp',
        'src/9.webp',
        'src/10.webp',
        'src/12.webp',
        'src/13.webp',
        'src/14.webp',
        'src/15.webp',
        'src/16.webp',
        'src/17.webp',
        'src/18.webp',
        'src/19.webp',
        'src/20.webp',
        'src/21.webp',
        'src/22.webp',
        'src/23.webp',
        'src/24.webp',
    ];
    var random = s[Math.floor(Math.random() * s.length)];
    document.getElementById('random-').src = random;
}
