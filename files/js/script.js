document.addEventListener('DOMContentLoaded', function() {

   if (window.matchMedia("(max-width: 1099px)").matches) {

      const menuItems = document.querySelectorAll('.menu-item a')
      if (menuItems) {
         menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', () => {
               document.body.classList.remove('_lock')
               document.querySelector('.menu__icon').classList.remove('_active')
               document.querySelector('.menu__body').classList.remove('_active')
            })
         })
      }
   }
})