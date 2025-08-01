

const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav-link')
/* console.log('Altura de #projects:', document.getElementById('projects').offsetHeight); */

const observer = new IntersectionObserver(
  entries => {
      let isAnySectionIntersecting = false; // Flag para rastrear la visibilidad de las secciones
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
 
     /*  if(entry.isIntersecting){
        navLinks.forEach(li => li.classList.remove('active-link'))
        if (link) link.classList.add('active-link')

        history.replaceState(null, null, `#${id}`)
      }
    */
    })
     if (!isAnySectionIntersecting) {
        navLinks.forEach(li => li.classList.remove('active-link'));
        history.replaceState(null, null, ' '); // Deja la URL sin fragmento
      } else {
        // Si hay una sección visible, actualizamos el fragmento de la URL
        history.replaceState(null, null, `#${activeId}`);
      }
  },
  {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.2
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