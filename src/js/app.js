import * as helpersFuctions from './modules/functions.js';

helpersFuctions.isWebp();
helpersFuctions.setVH();

window.addEventListener('resize', helpersFuctions.setVH);

const showcaseCarousel = new Swiper('.showcase-carousel', {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  speed: 1800,
  navigation: {
    nextEl: '.showcase-navigation__button_next',
    prevEl: '.showcase-navigation__button_prev',
  },
});

const video = document.querySelector('#video');
video.playbackRate = 2;
