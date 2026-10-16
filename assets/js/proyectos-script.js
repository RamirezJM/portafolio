
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
                         
                          <div class="project-badges"></div>
                          <div class="project-links">
                            <a href="${project.url}" target="_blank" rel="noopener noreferrer">Detalles</a>
                            
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

      /*    const toggleButton = card.querySelector('.btn-details')
         const projectDetails = card.querySelector('.project-details')
         toggleButton.addEventListener('click', () => {
           projectDetails.classList.toggle('show-details')
           if (projectDetails.classList.contains('show-details')) {
             toggleButton.textContent = 'Ocultar detalles'
           }
           else {
             toggleButton.textContent = 'Ver detalles'
           }
         }) */
      projectContainer.appendChild(card)
    })
  } catch (error) {
    console.error('Error:', error)
  }
}
projectLoad('project-container', 'assets/data/proyectos.json')


