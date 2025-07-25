

async function projectLoad(container, dataProjects) {
  const projectContainer = document.getElementById(container)

  try {
    const res = await fetch(dataProjects)
    const data = await res.json()

    data.forEach(project => {
      const card = document.createElement('article')
      card.className = 'project'
      card.innerHTML = `
                        <img src="${project.imagen}" class="project-image" alt="imagen proyecto">
                        <section class="project-info">
                          <h3>${project.titulo}</h3>
                          <p class="project-description">${project.descripcion}</p>
                          <div class="project-badges">  </div>
                          <div class="project-links">
                            <a href="${project.urlCodigo}">codigo</a>
                            <a href="${project.urlProyecto}">sitio</a>
                          </div>
                          <button class="btn-details" aria-expanded="false" aria-controls="details-${project.titulo}">Detalles</button>
                        </section>
                        
      
      `
      projectContainer.appendChild(card)  
    })
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