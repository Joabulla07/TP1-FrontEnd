const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Función para mover el carrusel
function updateCarousel() {
    const width = images[0].clientWidth;
    carouselImages.style.transform = `translateX(${-currentIndex * width}px)`;
}

// Función para avanzar automáticamente
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

// Evento para los botones de Prev y Next
nextButton.addEventListener('click', () => {
    nextImage();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

// Configurar el intervalo para cambiar automáticamente las imágenes
let autoSlide = setInterval(nextImage, 3000); // Cambiar cada 3 segundos

// Detener el auto-slide si el usuario interactúa con botones
prevButton.addEventListener('click', () => clearInterval(autoSlide));
nextButton.addEventListener('click', () => clearInterval(autoSlide));

// Opcional: Reiniciar el auto-slide después de detenerlo
prevButton.addEventListener('click', () => {
    autoSlide = setInterval(nextImage, 3000);
});
nextButton.addEventListener('click', () => {
    autoSlide = setInterval(nextImage, 3000);
});

// Asegurarse de que el carrusel funcione con tamaños de ventana diferentes
window.addEventListener('resize', updateCarousel);