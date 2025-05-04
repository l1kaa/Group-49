const next = document.getElementById("next");
const previous = document.getElementById("prev");
const img = document.getElementById("image");

let x = 0

const images = [
    "./images/img1.jpg",
    "./images/img2.jpg",
    "./images/img3.jpg",
    "./images/img4.jpg",
    "./images/img5.jpg"
];

next.addEventListener("click", function(){
    x++;
    if (x > images.length - 1){
        x = 0
    }
    img.src = images[x];
})

previous.addEventListener("click", function(){
    x--;
    if (x < 0){
        x = images.length - 1;
    }
    img.src = images[x]
})