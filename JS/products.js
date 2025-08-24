const carousel = document.querySelector('.carousel');
let cards = Array.from(document.querySelectorAll('.product-card'));

/* === Update positions for 3-card view === */
function setPositions() {
    cards.forEach((card, i) => {
        card.classList.remove('prev', 'active', 'next', 'hidden');

        if (i === 0) card.classList.add('prev');
        else if (i === 1) card.classList.add('active');
        else if (i === 2) card.classList.add('next');
        else card.classList.add('hidden'); // hide all other cards
    });
}

/* === Move carousel automatically === */
function nextCard() {
    const first = cards.shift();
    cards.push(first);
    setPositions();
}

/* Auto-slide every 4 seconds */
setInterval(nextCard, 4000);

/* Init */
setPositions();
