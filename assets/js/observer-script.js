const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-link')
const observer = new IntersectionObserver(
  entries => {
    let isAnySectionIntersecting = false;
    let activeId = '';

    entries.forEach(entry => {
      const id = entry.target.getAttribute('id')
      console.log('Sección detectada:', id);
      if (!id) return;
      const link = document.querySelector(`.nav-link[href="#${id}"]`)
      if (entry.isIntersecting) {
        isAnySectionIntersecting = true;
        activeId = id;
        navLinks.forEach(li => li.classList.remove('active-link'))
        if (link) link.classList.add('active-link')
      }
    })
    if (!isAnySectionIntersecting) {
      navLinks.forEach(li => li.classList.remove('active-link'));
      history.replaceState(null, null, ' ');
    } else {
      history.replaceState(null, null, `#${activeId}`);
    }
  },
  {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.2
  }
)
sections.forEach(section => observer.observe(section))



