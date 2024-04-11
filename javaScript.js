document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(document.querySelectorAll('.card'));
    const cardWidth = cards[0].getBoundingClientRect().width * 2; // Largura de 2 cards

    let currentIndex = 0;

    function setTrackPosition() {
        const offset = -currentIndex * cardWidth;
        track.style.transform = `translateX(${offset}px)`;
    }

    function nextCards() {
        currentIndex++;
        if (currentIndex > cards.length - 2) {
            currentIndex = 0;
        }
        setTrackPosition();
    }

    function prevCards() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - 2;
        }
        setTrackPosition();
    }

    // Controle de navegação do carrossel
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Anterior';
    prevBtn.addEventListener('click', prevCards);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Próximo';
    nextBtn.addEventListener('click', nextCards);

    const controlsContainer = document.createElement('div');
    controlsContainer.classList.add('carousel-controls');
    controlsContainer.appendChild(prevBtn);
    controlsContainer.appendChild(nextBtn);

    document.querySelector('.carousel-container').appendChild(controlsContainer);

    // Inicializa o carrossel na primeira posição
    setTrackPosition();
});