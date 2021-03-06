import { cardData } from '../../card-data.js';

// Title animation

const homeH1 = document.querySelector('.home-section-h1');
const textString = homeH1.textContent;
const splitLetters = textString.split("");

homeH1.textContent = "";

for (let i = 0; i < splitLetters.length; i++) {
    if (splitLetters[i] === " ") {
        homeH1.innerHTML += splitLetters[i];
    }
    homeH1.innerHTML += '<span>' + splitLetters[i] + '</span>';
};

let char = 0;
let timer = setInterval(onTick, 20);

function onTick() {
    const span = homeH1.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitLetters.length) {
        complete();
        return
    }
};

function complete() {
    clearInterval(timer);
    timer = null;
};

// Menu animation

const burgerMenu = document.getElementById('burger-menu');
const burgerMenuDiv = document.querySelector('.burger-menu-div');
const menuLink = document.querySelectorAll('.link');

burgerMenu.addEventListener('click', handleMenu);

menuLink.forEach(link => {
    link.addEventListener('click', menuClose);
});

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

// Carousel Testimonials

const carousel = document.querySelector('#carousel-container');

const carouselSliderDiv = document.createElement('div');
carouselSliderDiv.classList.add('carousel-slider');
carouselSliderDiv.setAttribute("id", 'carousel-slider-container');
carousel.appendChild(carouselSliderDiv);

cardData.forEach(card => {
    const carouselCardDiv = document.createElement('div');
    carouselCardDiv.classList.add('testimonials-carousel-card');
    carouselCardDiv.setAttribute("id", "carousel-card");
    carouselSliderDiv.appendChild(carouselCardDiv);

    const cardImage = document.createElement('img');
    cardImage.setAttribute("src", card.image);
    cardImage.setAttribute("alt", "person");
    carouselCardDiv.appendChild(cardImage);

    const cardTitleH2 = document.createElement('h3');
    cardTitleH2.textContent = card.name;
    carouselCardDiv.appendChild(cardTitleH2);

    const cardParagraph = document.createElement('p');
    cardParagraph.textContent = card.paragraph;
    carouselCardDiv.appendChild(cardParagraph);
});

// Accordion FAQ section

const accordionBtn = document.querySelectorAll('#faqs-btn');
const accordionText = document.querySelectorAll('.accordion-text');

accordionBtn.forEach((btn, btnI) => {
    btn.addEventListener('click', function openAccordion() {
        accordionText.forEach((txt, i) => {
            if (i === btnI) {
                txt.classList.toggle('faqs__accordion-expand');
            }
        });
    });
});


// Carousel slider

const carouselSlider = document.getElementById('carousel-slider-container');
const carouselCard = document.getElementById('carousel-card');
const nextButton = document.querySelector('#next-btn');
const previousButton = document.querySelector('#previous-btn');

nextButton.addEventListener('click', cardMoveForward);
previousButton.addEventListener('click', cardMoveBackward);

let counter = 0;
const cardSize = carouselCard.clientWidth + 25;
const carouselLength = cardData.length;

setInterval(function () {
    cardMoveForward()
}, 5000);

function cardMoveForward() {
    if (counter === carouselLength - 1) return
    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    if (counter <= carouselLength) {
        counter++;
        carouselSlider.style.transform = 'translateX(' + (-cardSize * counter) + 'px)';
    }

    if (counter === 4) {
        carouselSlider.style.transition = "transform 0.4s ease-in-out";
        counter = 0;
        carouselSlider.style.transform = 'translateX(' + (-cardSize * counter) + 'px)';
    }
};

function cardMoveBackward() {
    if (counter === 0) return

    carouselSlider.style.transition = "transform 0.4s ease-in-out";
    if (counter >= 0) {
        counter--;
        carouselSlider.style.transform = 'translateX(' + (-cardSize * counter) + 'px)';
    }
};