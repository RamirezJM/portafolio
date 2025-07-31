

const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-link')
console.log('Altura de #projects:', document.getElementById('projects').offsetHeight);

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
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  }
)
 sections.forEach(section => observer.observe(section)) 

 

/* export function observerSection(section) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        console.log('Sección visible:', id); // 👈 Esto ayuda a verificar en consola
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
        });
        history.replaceState(null, '', `#${id}`);
      }
    });
  }, {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  });

  observer.observe(section);
} */