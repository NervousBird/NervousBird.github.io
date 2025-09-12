// --- ICING MACHINE! --- //
let count = 0
const cupcakeIcings = document.querySelectorAll('#cupcake-icing')

document.getElementById('icing-button').addEventListener('click', (event) => {
  if (count < cupcakeIcings.length) {
    cupcakeIcings[count].removeAttribute('hidden')
    count++
  } else {
    alert('The cupcakes are all iced!')
  }
})

// --- Door --- //
document.getElementById('closedDoor').addEventListener('click', (event) => {
  document.getElementById('openDoor').style.display = 'flex'
  document.getElementById('closedDoor').style.display = 'none'
})

document.getElementById('openDoor').addEventListener('click', (event) => {
  document.getElementById('closedDoor').style.display = 'flex'
  document.getElementById('openDoor').style.display = 'none'
})
