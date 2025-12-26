var gallery = [
    { src: "Sambar Rice.jpg", caption: "Sambar Rice" },
    { src: "Rasam Rice.jpg", caption: "Rasam Rice" },
    { src: "idli.jpg", caption: "Idli Sambar" },
    { src: "Dosa.jpg", caption: "Dosa" },
    { src: "vada.jpg", caption: "Sambar Vada" },
    { src: "poori.jpg", caption: "Poori" },
];

var index = 0;
var imgElement = document.getElementById("image");
var captionElement = document.getElementById("caption");
var prevBtn = document.getElementById("button1");
var nextBtn = document.getElementById("button2");

function updateGallery() {
    imgElement.src = gallery[index].src;
    captionElement.textContent = gallery[index].caption;
}

button2.onclick = function() {
    index = (index + 1) % gallery.length;
    updateGallery();
}

button1.onclick = function() {
    index = (index - 1 + gallery.length) % gallery.length;
    updateGallery();
}

updateGallery();