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


/*observer*/

const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-link')

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id')
      console.log('Sección detectada:', id);
      if (!id) return;
      const link = document.querySelector(`.nav-link[href="#${id}"]`)
      
      if(entry.isIntersecting){
        navLinks.forEach(li => li.classList.remove('active-link'))
        if (link) link.classList.add('active-link')

        history.replaceState(null, null, `#${id}`)
      }
   
    })
  },
  {
    rootMargin: /* -50% 0px -50% 0px */ '0px 0px -70% 0px',
    threshold: 0.1
  }
)
sections.forEach(section => observer.observe(section));

