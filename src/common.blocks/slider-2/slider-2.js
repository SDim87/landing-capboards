import closeMenu from '../cabinet/cabinet';

// slider-2
const sliderCategory = new Swiper('.js-slider-2__container', {
  slidesPerView: 4,
  spaceBetween: 16,
  observer: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    prevEl: '.js-slider-2__prev',
    nextEl: '.js-slider-2__next',
  },
  pagination: {
    el: '.js-slider-2__pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  },
});

$('.js-slider-2__container').hover(() => {
  sliderCategory.autoplay.stop();
}, () => {
  sliderCategory.autoplay.start();
});

// slider-2_sale
const sliderSecond = new Swiper('.js-slider-2__container_sale', {
  slidesPerView: 4,
  spaceBetween: 40,
  observer: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    prevEl: '.js-slider-2__prev_sale',
    nextEl: '.js-slider-2__next_sale',
  },
  pagination: {
    el: '.js-slider-2__pagination_sale',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  },
});

$('.js-slider-2__container_sale').hover(() => {
  sliderSecond.autoplay.stop();
}, () => {
  sliderSecond.autoplay.start();
});


// touchstart -> close menu cabinet
sliderCategory.on('touchStart', () => {
  closeMenu();
});

// touchstart -> close menu cabinet
sliderSecond.on('touchStart', () => {
  closeMenu();
});
