const titles = ["Beautiful Sunset", "Mystic Mountains", "Ocean Serenity"];
const contents = [
    "Experience the beauty of sunsets like never before.",
    "Discover the wonders hidden in towering peaks.",
    "Feel the calm of ocean waves embracing the shore."
];
const images = [
    "Img2.jpeg",
    "Img3.jpeg",
    "Img4.jpeg"
];
let index = 0;

function updateContent() {
    index = (index + 1) % titles.length;
    document.getElementById("card-title").innerText = titles[index];
    document.getElementById("card-content").innerText = contents[index];
    const image = document.getElementById("card-image");
    image.style.opacity = 0; // Fade out
    setTimeout(() => {
        image.src = images[index];
        image.style.opacity = 1; // Fade in
    }, 300);
}