const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Получаем все изображения с атрибутом loading="lazy"
function addLoadedClass(image) { // Функция для добавления класса к родителю изображения после его загрузки
   const parentElement = image.parentElement;
   if (image.complete) { // Проверяем, загружено ли изображение
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Добавляем событие load, чтобы добавить класс после загрузки изображения
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Перебираем все изображения и вызываем функцию addLoadedClass для каждого

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

const pageAboutUsSlider = document.querySelector('.page-about-us__slider')
if (pageAboutUsSlider) {
   new Swiper(pageAboutUsSlider, {
      navigation: {
         prevEl: '#page-about-us-slider-button-prev',
         nextEl: '#page-about-us-slider-button-next',
      },
      slidesPerView: 3,
      watchOverflow: true,
      spaceBetween: 16,
      //loop: true,
      speed: 800,
      effect: 'slide',
         // Отключить предзагрузка картинок
      preloadImages: false,

      // Lazy Loading (подгрузка картинок)
      lazy: {
         // Подгружать на старте переключения слайда
         loadOnTransitionStart: false,

         // Подгрузить предыдущую и следующую картинку
         loadPrewNext: false,
      },
      // Слежка за видимыми слайдами
      watchSlidesProgress: true,

      // Добавление класса видимым слайдам
      watchSlidesVisibility: true,
      breakpoints: {
         0: {
            slidesPerView: 1.1,
         },
         481: {
            slidesPerView: 2.1,
         },
         576: {
            slidesPerView: 2,
         },
         669: {
            slidesPerView: 3,
         }
      }
   });
}