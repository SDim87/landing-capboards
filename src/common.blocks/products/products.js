import closeMenu from '../cabinet/cabinet'

// products
const sliderProducts = new Swiper('.js-products__container', {
  slidesPerView: 4,
  spaceBetween: 16,
  observer: true,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    prevEl: '.js-products__prev',
    nextEl: '.js-products__next',
  },
  pagination: {
    el: '.js-products__pagination',
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
})

$('.js-products__container').hover(
  () => {
    sliderProducts.autoplay.stop()
  },
  () => {
    sliderProducts.autoplay.start()
  },
)

// touchstart -> close menu cabinet
sliderProducts.on('touchStart', () => {
  closeMenu()
})
