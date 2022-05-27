/* NAVBAR SCROLL EFFECT */
const body = document.body;
let lastScroll = 0;

//SCROLL NAVBAR
window.addEventListener('resize', () => {
    document.getElementById('responsive-nav').className = 'responsive-nav';
});

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    document.getElementById('responsive-nav').className = 'responsive-nav';

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
})

// Splide js

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
    rewind : true,
    autoplay: true,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: false,
    throttle: 300,
  } );
  
  splide.mount();

  //Slider mobilversion

const slideContainer = document.querySelector('.slidecontainer');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
    slides = getSlides();
    if(slides[index].id === firstClone.id){
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
    if(slides[index].id === lastClone.id){
        slide.style.transition = 'none';
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        }
});

const moveToNextSlide = () => {
    slides = getSlides();
    if (index >= slides.length - 1) return;
    index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '.7s';
};

const moveToPreviousSlide = () => {
    if(index <= 0) return;
    index--;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '.7s';
};



slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();

// Åbningstider - lavet med array

let a = [
  "Mandag - Torsdag: 10:00 - 18:00",
  "Fredag - lørdag: 10:00 - 20:00",
  "Søndag: 10:00 - 18:00",
]

for (showMe in a){
  åbningstider.innerHTML += '<li>' + a [ showMe ] + '</li>';

}

// Mapbox i footer

mapboxgl.accessToken = 'pk.eyJ1IjoibWlhbmVkZXJnYWFyZCIsImEiOiJjbDBxZWNqcW4yNWhzM2Vwd2l5MmwwMHZjIn0.qtSZbLPjUQ336Kvoq07YqQ'; 
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mianedergaard/cl3cucxon000015nmun6v6jf6', 
  center: [10.21854, 56.15885],
  zoom: 13.7
});



