window.onload = function() {
    var s = [
        'src/1.jpg',
        'src/2.jpg',
        'src/3.jpg',
        'src/4.jpg',
        'src/5.jpg',
        'src/6.jpg',
        'src/7.jpg',
        'src/8.jpg',
        'src/9.jpg',
        'src/10.jpg',
        'src/12.jpg',
        'src/13.jpg',
        'src/14.jpg',
        'src/15.jpg',
        'src/16.jpg',
        'src/17.jpg',
        'src/18.jpg',
        'src/19.jpg',
        'src/20.jpg',
        'src/21.jpg',
        'src/22.jpg',
        'src/23.jpg',
        'src/24.jpg',
    ];
    var random = s[Math.floor(Math.random() * s.length)];
    document.getElementById('random-').src = random;
}
