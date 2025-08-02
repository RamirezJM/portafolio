/*  header */

/* document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header')
  let lastScrollY = window.scrollY
  const scrollThreshold = 100

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY

    if(currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
      header.classList.add('hidden')
      
    }
    else if(currentScrollY < lastScrollY || currentScrollY <= scrollThreshold) {
      header.classList.remove('hidden')
    }

    lastScrollY = currentScrollY

  })
}) */
document.addEventListener('DOMContentLoaded', () => {
const header = document.querySelector('header')
let lastScrollTop = 0

window.addEventListener('scroll', () => {
  const scrollMove = window.scrollY
  if (scrollMove > lastScrollTop) {
      // Scroll hacia abajo: ocultar
      header.classList.remove('fixed');
      header.classList.add('hidden');
    } else {
      if (scrollMove > 5) {
        header.classList.remove('hidden');
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
        header.classList.remove('hidden');
      }
    }
  lastScrollTop = scrollMove
})

})




/* menu */

const menuButton = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('nav')

menuButton.addEventListener('click', () => {
  const isActive = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isActive))
  navMenu.classList.toggle('active')
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





