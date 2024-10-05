const images = ["image1.png", "image2.png", "image3.png", "image4.png"];
let currentIndex = 0;

function nextImage(){
    currentIndex = (currentIndex + 1) % images.length;
    imgElement = document.getElementById('pic');
    imgElement.src = "\\JBK\\javascript\\images\\" + images[currentIndex];
}

function prevImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement = document.getElementById('pic');
    imgElement.src = "\\JBK\\javascript\\images\\" + images[currentIndex];
}