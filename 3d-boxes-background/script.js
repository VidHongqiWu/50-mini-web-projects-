const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

function createBoxes() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundPosition = `${-j * 120}px ${-i * 120}px`
      boxesContainer.appendChild(box)
    }
  }
}

createBoxes()