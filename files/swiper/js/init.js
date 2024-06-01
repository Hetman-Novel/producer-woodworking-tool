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
      loop: true,
      speed: 800,
      effect: 'slide',
      autoplay: {
         deley: 1000,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },
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

const gallerySlider = document.querySelector('.gallery__slider')
if (gallerySlider) {
   new Swiper(gallerySlider, {
      navigation: {
         prevEl: '#gallery-slider-button-prev',
         nextEl: '#gallery-slider-button-next',
      },
      slidesPerView: 4,
      watchOverflow: true,
      spaceBetween: 22,
      //loop: true,
      speed: 800,
      effect: 'slide',
      pagination: {
         el: '#gallery-slider-pagination',
         clickable: true,
      },
      breakpoints: {
         0: {
            slidesPerView: 2,
            spaceBetween: 11,
         },
         480: {
            slidesPerView: 2,
            spaceBetween: 11,
         },
         721: {
            slidesPerView: 3,
            spaceBetween: 12,
         },
         1025: {
            slidesPerView: 4,
            spaceBetween: 22,
         }
      }
   });
}