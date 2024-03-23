window.onload = function() {
    var images = [
        'src/image1.jpg',
        'src/image2.jpg',
        'src/image3.jpg',
        'src/image4.jpg',
        'src/image5.jpg',
        'src/image6.jpg',
        'src/image7.jpg',
        'src/image8.jpg',
        'src/image9.jpg',
        'src/image10.jpg',
        'src/image12.jpg',
        'src/image13.jpg',
        'src/image14.jpg',
        'src/image15.jpg',
        'src/image16.jpg',
        'src/image17.jpg',
        'src/image18.jpg',
        'src/image19.jpg',
        'src/image20.jpg',
        'src/image21.jpg',
        'src/image22.jpg',
        'src/image23.jpg',
        'src/image24.jpg',
    ];
    var randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('random-image').src = randomImage;
}
