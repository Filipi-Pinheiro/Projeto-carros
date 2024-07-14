let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .itens')
let indicador = document.querySelector('.indicadores')
let dots = indicador.querySelectorAll('ul li')
let list = container.querySelector('.list')

let select = 0
let firsPosition = 0
let lastPosition = itens.length -1

function setSlider(){
  let itemOld = container.querySelector('.list .itens.select')
  itemOld.classList.remove('select')

  let dotsOld = indicador.querySelector('ul li.select')
  dotsOld.classList.remove('select')
  dots[select].classList.add('select')

  indicador.querySelector('.numero').innerHTML = '0' + (select + 1)
  
}

nextButton.onclick = () => {
  list.style.setProperty('--calculation', -1)
  select = select + 1 > lastPosition ? 0 : select +1
  setSlider()
  itens[select].classList.add('select')
}

prevButton.onclick = () => {
  list.style.setProperty('--calculation', 1)
  select = select - 1 < firsPosition ? lastPosition : select -1
  setSlider()
  itens[select].classList.add('select')
}