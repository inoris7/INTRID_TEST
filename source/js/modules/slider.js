// eslint-disable-next-line
const slider = new Swiper('.swiper', {
  direction: 'horizontal',

  breakpoints: {
    769: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },

    360: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

});
