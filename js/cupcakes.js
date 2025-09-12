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
