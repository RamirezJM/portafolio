
const buttons = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.tab-content')

buttons.forEach(btn =>{
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
    data.sort((a, b) => b.horas - a.horas)

    data.forEach(item => {
      const card = document.createElement('div')
      card.className = 'cert-card'
      card.innerHTML = `
                    <h3>${item.titulo}</h3>
                    <p>${item.institucion}</p>
                    <p>${item.horas} horas</p>
                    <p>${item.fecha}</p>
                    <a href="${item.link}" target="_blank">Certificado</a>
      `
      container.appendChild(card)
    })
  } catch (error) {
    console.error('Error cargando datos:', error)
    
  }
  
}
dataLoad('tecnica', 'assets/data/formacion.json')
dataLoad('complementaria', 'assets/data/formacion_complementaria.json')