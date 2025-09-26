/*======== HEADER SCROLL =======*/

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header')
  let lastScrollTop = 0

  window.addEventListener('scroll', () => {
    const scrollMove = window.scrollY
    if (scrollMove > lastScrollTop) {
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

/*=========  HAMBURGUER MENU  =========*/

const menuButton = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('nav')

menuButton.addEventListener('click', () => {
  const isActive = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isActive))
  navMenu.classList.toggle('active')
})

/*======== AOS ========*/
AOS.init();


/*========  SWIPER =========*/
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 10000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});







