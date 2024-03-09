

let h1Texts = ['Pear', 'Apple', 'Exotic'];
let logoColours = [
    'var(--pear-logo)',
    'var(--apple-logo)',
    'var(--exotic-logo)'
];
let keyframes = ['wave-pear-effect', 'wave-apple-effect', 'wave-exotic-effect'];

gsap.from('.fruit-image',{
    y: '-100vh', delay: 0.5
});
gsap.to('.fruit-image img', {
    x: 'random(-20, 20)',
    y: 'random(-20, 20)',
    zIndex: '22',
    duratio: '2',
    ease: 'none',
    yoyo: 'true',
    repeat: '-1'
});

const waveEffect = document.querySelector('.wave');
const sections = document.querySelectorAll('.section')
const prevButton= document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const canLabels = document.querySelector('.can-labels');
const sectionContainer = document.querySelector('.section-container');

let index = 0;
let currentIndex = 0;
let currentPosition = 0;

nextButton.addEventListener('click', () => {
    if(currentPosition > -200){
        currentPosition -= 100;
        canLabels.style.left = `${currentPosition}%`;
        sectionContainer.style.left = `${currentPosition}%`;
    }
    currentIndex++;
    if(currentIndex < h1Texts.length) {
        document.querySelector('.h1').innerHTML = h1Texts[currentIndex];
    }

    // gsap animations to next section
    gsap.to('.logo',{
        opacity: '1',
        duration: '1',
        color: logoColours[currentIndex],
    });
    gsap.from('.h1',{y: '20%', opacity: 0, duration: 0.5});
    gsap.from('.fruit-image', {y: '-100vh', delay: 0.4, duration: 0.4});

    // disable the next button when last section is active
    if (currentIndex === h1Texts.length - 1) {
        nextButton.style.display = 'none';
    }

    // Enable the previous button when the last section is not active
    if (currentIndex > 0) {
        prevButton.style.display = 'block';
    }

    // button color  ad animations
    nextButton.style.color = logoColours[currentIndex + 1];
    prevButton.style.color = logoColours[currentIndex - 1];

    nextButton.style.animationName = keyframes[currentIndex + 1];
    prevButton.style.animationName = keyframes[currentIndex - 1];
});

// add event listeners for buttons

prevButton.addEventListener("click", () => {
    if (currentPosition < 0) {
        currentPosition += 100;

        // update the left position of can-lables
        canLabels.style.left = `${currentPosition}%`;
        sectionContainer.style.left = `${currentPosition}%`;
        sectionContainer.style.transition = `all 0.5s ease-in-out`
    }

    //decrement index and current index

    currentIndex--;
    if (currentIndex >= 0) {
        document.querySelector('h1').innerHTML = h1Texts[currentIndex];
    }

    // gsap animation for previous section components

    gsap.to('.logo', { color: logoColours[currentIndex], duration: 1});
    gsap.from('.h1', { y: '20%', duration: 0.5, opacity: 0});
    gsap.from('.fruit-image', { y: '100vh', delay: 0.5});

    // enable next button if it was disabled
    nextButton.style.display = 'block';

    // disable previous button if it was on first section
    if (currentIndex === 0){
        prevButton.style.display = 'none';
    }

    // button color and animation
    nextButton.style.color = logoColours[currentIndex + 1];
    prevButton.style.color = logoColours[currentIndex - 1];

    nextButton.style.animationName = keyframes[currentIndex + 1];
    prevButton.style.animationName = keyframes[currentIndex - 1];
})