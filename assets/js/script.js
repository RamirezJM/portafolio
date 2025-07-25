/* menu */

const openButton = document.querySelector('.open-menu')
const closeButton = document.querySelector('.close-menu')
const navMenu = document.querySelector('nav')

openButton.addEventListener('click', () => {
  navMenu.classList.add('active')
})
closeButton.addEventListener('click', () => {
  navMenu.classList.remove('active')
})



   AOS.init();



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});