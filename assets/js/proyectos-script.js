/* import { observerSection } from './observer-script.js' */


async function projectLoad(container, dataProjects) {
  const projectContainer = document.getElementById(container)

  try {
    const res = await fetch(dataProjects)
    const data = await res.json()

    data.forEach(project => {
      const card = document.createElement('article')
      card.classList.add('project')

      card.innerHTML = `
                        <img src="${project.imagen}" class="project-image" alt="imagen proyecto">
                        <section class="project-info">
                          <h3>${project.titulo}</h3>
                          <p class="project-description">${project.descripcion}</p>
                          <h4>Tecnologías</h4>
                          <div class="project-badges"></div>
                          <div class="project-links">
                            <a href="${project.urlCodigo}"><img src="assets/images/github.svg" class="project-link-image"/></a>
                            <a href="${project.urlProyecto}"><img src="assets/images/world.svg" class="project-link-image"/></a>
                          </div>
                          <button class="btn-details" aria-expanded="false" aria-controls="details-${project.titulo}">Ver detalles</button>
                          <div class="project-details">
                            <h4>Rol</h4>
                            <ul class="rol-details">
                            ${project.detalles.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                            <h4>Situacion</h4>
                            <p class=project-status>${project.situacion}</p> 
                          </div>
                        </section>
                       `
      const badges = card.querySelector('.project-badges')
      project.tecnologias.forEach(techBadge => {
        const badgeImage = document.createElement('img')
        badgeImage.src = techBadge.path
        badgeImage.alt = techBadge.alt
        badgeImage.classList.add('tech-badge')
        badges.appendChild(badgeImage)
      })

      const toggleButton = card.querySelector('.btn-details')
      const projectDetails = card.querySelector('.project-details')

      toggleButton.addEventListener('click', () => {
        projectDetails.classList.toggle('show-details')

        if (projectDetails.classList.contains('show-details')) {
          toggleButton.textContent = 'Ocultar detalles'
        }
        else {
          toggleButton.textContent = 'Ver detalles'
        }

      })

      projectContainer.appendChild(card)
    })
    /* const projectsSection = document.getElementById('projects');
    observerSection(projectsSection); */
  } catch (error) {
    console.error('Error:', error)

  }

}
projectLoad('project-container', 'assets/data/proyectos.json')


/* {
    "id": "",
    "titulo": "",
    "imagen": "",
    "descripcion": "",
    "tecnologias": "",
    "url-proyecto": "",
    "url-codigo": "",
    "detalles": {
      "rol": []
    },
    "situacion": ""
  },
  {
    "id": "",
    "titulo": "",
    "imagen": "",
    "descripcion": "",
    "tecnologias": "",
    "url-proyecto": "",
    "url-codigo": "",
    "detalles": {
      "rol": []
    },
    "situacion": ""
  },
  {
    "id": "",
    "titulo": "",
    "imagen": "",
    "descripcion": "",
    "tecnologias": "",
    "url-proyecto": "",
    "url-codigo": "",
    "detalles": {
      "rol": []
    },
    "situacion": ""
  },
  {
    "id": "",
    "titulo": "",
    "imagen": "",
    "descripcion": "",
    "tecnologias": "",
    "url-proyecto": "",
    "url-codigo": "",
    "detalles": {
      "rol": []
    },
    "situacion": ""
  },
  {
    "id": "",
    "titulo": "",
    "imagen": "",
    "descripcion": "",
    "tecnologias": "",
    "url-proyecto": "",
    "url-codigo": "",
    "detalles": {
      "rol": []
    },
    "situacion": ""
  } */

    /* {
    "id": "las-tablas",
    "titulo": "Restaurant Las Tablas",
    "imagen": "/assets/images/las_tablas.jpg",
    "descripcion": "Diseño y desarrollo web para 'Las Tablas', un bar-restaurant, creando una presencia online atractiva y una plataforma para destacar su propuesta gastronómica y eventos. Gestioné el diseño, la maquetación y el despliegue inicial del sitio.",
    "tecnologias": [
      {
        "path": "/assets/images/html5.svg",
        "alt": "html5 badge"
      },
      {
        "path": "/assets/images/css3.svg",
        "alt": "css3 badge"
      },
      {
        "path": "/assets/images/javascript.svg",
        "alt": "javascript badge"
      }
    ],
    "urlProyecto": "https://las-tablas.cl/",
    "urlCodigo": "https://github.com/RamirezJM/Las_Tablas",
    "detalles": [
        "Diseño y Maquetación: Creación de la interfaz visual y la estructura responsive del sitio.",
        "Desarrollo Frontend: Implementación del sitio web con énfasis en la presentación de menú y ambiente.",
        "Hosting y Despliegue: Configuración y puesta en marcha del sitio en el servidor."
      ],
    
    "situacion": "Actualmente el proyecto se encuentra en una pausa activa por decisión del cliente, a la espera de la finalización de un nuevo comedor para futuras integraciones."
  }, */