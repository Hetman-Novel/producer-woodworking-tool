const partnersSlider = document.querySelector('.partners__slider')
if (partnersSlider) {
   new Swiper(partnersSlider, {
      navigation: {
         prevEl: '#partners-slider-button-prev',
         nextEl: '#partners-slider-button-next',
      },
      slidesPerView: 5,
      watchOverflow: true,
      spaceBetween: 18,
      //loop: true,
      speed: 800,
      effect: 'slide',
      breakpoints: {
         0: {
            slidesPerView: 2,
            spaceBetween: 11,
         },
         480: {
            slidesPerView: 3,
            spaceBetween: 11,
         },
         721: {
            slidesPerView: 4,
            spaceBetween: 11,
         },
         1025: {
            slidesPerView: 5,
            spaceBetween: 18,
         }
      }
   });
}