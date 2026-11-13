// Typing effect for greeting
const greetingText = "Wishing you lots of happiness. May all your dreams come true.";
const greetingElement = document.querySelector('.greeting');
let charIndex = 0;

function typeGreeting() {
    if (charIndex < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(charIndex++);
        setTimeout(typeGreeting, 60);
    }
}

window.addEventListener('load', () => {
    gsap.to('h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
    gsap.to('.cta-button', { opacity: 1, duration: 0.8, delay: 0.4 });
    typeGreeting();
});

// Fade out, then go to next page
document.querySelector('.cta-button').addEventListener('click', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 0.6,
        onComplete: () => { window.location.href = 'cause.html'; }
    });
});
