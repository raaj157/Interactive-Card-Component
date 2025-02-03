const products = [
    { title: "Quantum Laptop", price: "$1999", image: "https://cdn-icons-png.flaticon.com/512/1067/1067555.png" },
    { title: "Holo Watch", price: "$599", image: "https://cdn-icons-png.flaticon.com/512/1067/1067565.png" },
    { title: "Neural Glasses", price: "$899", image: "https://cdn-icons-png.flaticon.com/512/1067/1067590.png" }
];

const carousel = document.getElementById('carousel');
let currentAngle = 0;

products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <span class="price-tag">${product.price}</span>
                <img src="${product.image}" class="product-image" style="width: 80%; height: auto; margin-bottom: 15px;">
                <h2 class="product-title">${product.title}</h2>
            </div>
            <div class="card-back">
                <h2>Specifications</h2>
                <p>Advanced features include AI integration and holographic displays.</p>
            </div>
        </div>`;

    const angle = index * (360 / products.length);
    card.style.transform = `rotateY(${angle}deg) translateZ(250px)`;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    carousel.appendChild(card);
});

document.getElementById('next').addEventListener('click', () => rotateCarousel(-360 / products.length));
document.getElementById('prev').addEventListener('click', () => rotateCarousel(360 / products.length));

function rotateCarousel(angle) {
    currentAngle += angle;
    carousel.style.transform = `rotateY(${currentAngle}deg)`;
}