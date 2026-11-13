// Wishes
const reasons = [
    { text: "Keep smiling, keep shining, and keep achieving your dreams.", gif: "gif1.gif" },
    { text: "May your day be filled with love, laughter, and endless joy.", gif: "gif2.gif" },
    { text: "May this new year of your life bring you endless happiness and success.", gif: "gif1.gif" }
];

let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');

function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML = `
        <img class="reason-gif" src="${reason.gif}" alt="">
        <div class="reason-text">${reason.text}</div>`;
    gsap.from(card, { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' });
    return card;
}

function showEnding() {
    gsap.to('.ending-text', { opacity: 1, duration: 0.8 });
    gsap.to('.teddy-hug', { opacity: 1, duration: 0.8, delay: 0.2 });
}

function goToMemories() {
    gsap.to('body', {
        opacity: 0,
        duration: 0.6,
        onComplete: () => { window.location.href = 'last.html'; }
    });
}

shuffleButton.addEventListener('click', () => {
    // After all wishes are shown, the button becomes the link to the next page
    if (currentReasonIndex >= reasons.length) {
        goToMemories();
        return;
    }

    reasonsContainer.appendChild(createReasonCard(reasons[currentReasonIndex]));
    currentReasonIndex++;
    reasonCounter.textContent = `${currentReasonIndex} of ${reasons.length}`;

    if (currentReasonIndex === reasons.length) {
        shuffleButton.textContent = 'See our memories';
        showEnding();
    }
});
