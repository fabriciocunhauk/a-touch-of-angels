import { cardData } from '../../card-data.js';

const homeH1 = document.querySelector('.home-section-h1');
const textString = homeH1.textContent;
const splitLetters = textString.split("");

homeH1.textContent = "";

for (let i = 0; i < splitLetters.length; i++) {
    if (splitLetters[i] === " ") {
        homeH1.innerHTML += splitLetters[i]
    }
    homeH1.innerHTML += '<span>' + splitLetters[i] + '</span>'
}

let char = 0;
let timer = setInterval(onTick, 20);

function onTick() {
    const span = homeH1.querySelectorAll('span')[char];
    span.classList.add('fade')
    char++
    if (char === splitLetters.length) {
        complete();
        return
    }
};

function complete() {
    clearInterval(timer);
    timer = null;
}

const burgerMenu = document.getElementById('burger-menu');
const sideMenu = document.getElementById('menu-container');
const burgerMenuDiv = document.querySelector('.burger-menu-div');

burgerMenu.addEventListener('click', handleMenu);

let menuEvent = false;

function handleMenu() {
    if (!menuEvent) {
        menuEvent = true;
        menuOpen();
    } else {
        menuClose();
        menuEvent = false;
    }
};

function menuOpen() {
    burgerMenuDiv.style.width = '300px';
};

function menuClose() {
    burgerMenuDiv.style.width = '0';
};

const carousel = document.querySelector('#carousel-container');

cardData.forEach(card => {
    const carouselCard = document.createElement('div');
    carouselCard.classList.add('testimonials-carousel-card');
    carousel.appendChild(carouselCard);

    const cardImage = document.createElement('img');
    cardImage.setAttribute("src", card.image);
    cardImage.setAttribute("alt", "person");
    carouselCard.appendChild(cardImage);

    const cardTitleH2 = document.createElement('h2');
    cardTitleH2.textContent = card.name;
    carouselCard.appendChild(cardTitleH2);

    const cardParagraph = document.createElement('p');
    cardParagraph.textContent = card.paragraph;
    carouselCard.appendChild(cardParagraph);
});

