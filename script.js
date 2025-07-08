document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os carrosséis na página
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = carousel.querySelectorAll('.carousel-images img');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        const dots = carousel.querySelectorAll('.carousel-dots .dot');

        let currentIndex = 0;
        const totalImages = images.length;

        // Função para mostrar a imagem correta
        function showImage(index) {
            // Garante que o índice esteja dentro dos limites
            if (index >= totalImages) {
                currentIndex = 0; // Volta para a primeira imagem
            } else if (index < 0) {
                currentIndex = totalImages - 1; // Vai para a última imagem
            } else {
                currentIndex = index;
            }

            // Move o contêiner de imagens horizontalmente
            const offset = -currentIndex * 100; // 100% da largura de uma imagem
            imagesContainer.style.transform = `translateX(${offset}%)`;

            // Atualiza os pontos de navegação
            dots.forEach((dot, i) => {
                if (i === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Event Listeners para os botões de navegação
        nextButton.addEventListener('click', () => {
            showImage(currentIndex + 1);
        });

        prevButton.addEventListener('click', () => {
            showImage(currentIndex - 1);
        });

        // Event Listeners para os pontos de navegação
        dots.forEach(dot => {
            dot.addEventListener('click', (event) => {
                const dotIndex = parseInt(event.target.dataset.index);
                showImage(dotIndex);
            });
        });

        // Exibe a primeira imagem ao carregar a página
        showImage(0);

        // Opcional: Carrossel automático (descomente para ativar)
        // setInterval(() => {
        //     showImage(currentIndex + 1);
        // }, 5000); // Muda a imagem a cada 5 segundos
    });
});