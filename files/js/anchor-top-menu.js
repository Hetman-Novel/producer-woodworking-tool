document.addEventListener('DOMContentLoaded', function () {
   
   // Функция для плавной прокрутки к якорю
   function smoothScrollToAnchor(anchor) {
      const headerHeight = document.querySelector('.header-container').offsetHeight;
      const targetElement = document.querySelector(anchor);
      if (targetElement) {
         const targetPosition = targetElement.offsetTop - headerHeight;
         window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
         });
      }
   }

   // Функция для добавления и удаления активных классов у родительских элементов ссылок
   function toggleActiveClasses(currentLink) {
      const menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach(item => {
         if (item.contains(currentLink)) {
            item.classList.add('current-menu-item', 'current_page_item');
         } else {
            item.classList.remove('current-menu-item', 'current_page_item');
         }
      });
   }

   // Обработчик клика на ссылки
   document.querySelectorAll('.menu-item a').forEach(link => {
      link.addEventListener('click', function(event) {
         event.preventDefault(); // Предотвращаем стандартное поведение ссылки

         const targetAnchor = this.getAttribute('href'); // Получаем значение атрибута href
         smoothScrollToAnchor(targetAnchor); // Прокручиваем к якорю

         toggleActiveClasses(this.parentElement); // Добавляем/удаляем активные классы
      });
   });

});