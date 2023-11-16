const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Função para exibir a imagem atual
function showCurrentImage() {
    carouselItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Inicializa o carrossel
showCurrentImage();

// Event listener para o botão Anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showCurrentImage();
});

// Event listener para o botão Próxima
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCurrentImage();
});