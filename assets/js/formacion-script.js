
const buttons = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.tab-content')

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'))
    contents.forEach(c => c.classList.remove('active'))

    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active')
  })
})

async function dataLoad(tabId, jsonData) {
  const container = document.getElementById(tabId)

  try {
    const res = await fetch(jsonData)
    const data = await res.json()
  /*   console.log(data) */
    if (data[0].id !== undefined) {
      data.sort((a, b) => a.id - b.id)
    } else {
      data.sort((a, b) => b.horas - a.horas)
    }

    data.forEach(item => {
      const card = document.createElement('div')
      card.className = 'cert-card'
      let content
      if (item.horas == null && item.link == null)
        content = `
                    <h3>${item.titulo}</h3>
                    <p>${item.institucion}</p>
                    <p>${item.fecha}</p>
                `
      else {
        content = ` <a href="${item.link}" target="_blank" rel="noopener noreferrer"><h3>${item.titulo}</a></h3>
                    <p>${item.institucion}</p>
                    <p>${item.horas} horas</p>
                    <p>${item.fecha}</p>
                `

      }
      card.innerHTML = content
      container.appendChild(card)
    })
  } catch (error) {
    console.error('Error cargando datos:', error)

  }

}
dataLoad('tecnica', 'assets/data/formacion.json')
dataLoad('complementaria', 'assets/data/formacion_complementaria.json')