window.onload = function() {
    var images = [
'https://i.postimg.cc/fyDJnQVw/1.webp';
'https://i.postimg.cc/nrFcSKWr/10.webp';
'https://i.postimg.cc/T1t2zL89/11.webp';
'https://i.postimg.cc/RCd0683'h/12.webp';
'https://i.postimg.cc/TYP3r9m'h/13.webp';
'https://i.postimg.cc/ZKDKjdxY/14.webp';
'https://i.postimg.cc/L8Y4W8xt/15.webp';
'https://i.postimg.cc/wjCxYYrS/16.webp';
'https://i.postimg.cc/3w28Kb5W/17.webp';
'https://i.postimg.cc/76DxbMw9/18.webp';
'https://i.postimg.cc/MTDzBMGS/19.webp';
'https://i.postimg.cc/'ht6v4dXZ/2.webp';
'https://i.postimg.cc/prLRJW9n/20.webp';
'https://i.postimg.cc/brV867bV/21.webp';
'https://i.postimg.cc/RCgMV'h81/22.webp';
'https://i.postimg.cc/ncMnsLby/23.webp';
'https://i.postimg.cc/F'hLmZnKG/24.webp';
'https://i.postimg.cc/cJ3'hvLYx/3.webp';
'https://i.postimg.cc/Yq2'hdkcR/4.webp';
'https://i.postimg.cc/c'hMLckXP/5.webp';
'https://i.postimg.cc/dQj'hR3fD/6.webp';
'https://i.postimg.cc/bN6dMMp'h/7.webp';
'https://i.postimg.cc/KzyYB'hrn/8.webp';
'https://i.postimg.cc/Nj5Lw4jr/9.webp';
    ];
    var randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('random-image').src = randomImage;
}
