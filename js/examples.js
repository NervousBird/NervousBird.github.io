const absoluteBox = document.querySelector('.box-absolute')
const absoluteToggle = document.querySelector('#absolute')
const absoluteTop = document.querySelector('#absolute-top')
const absoluteLeft = document.querySelector('#absolute-left')
const absoluteForm = document.querySelector('.absolute-inputs')

absoluteBox.style.top = '0px'
absoluteBox.style.left = '0px'

const UpdateAbsoluteExample = () => {
  if (absoluteToggle.checked) {
    absoluteBox.style.position = 'absolute'
  } else {
    absoluteBox.style.position = 'static'
  }
  absoluteBox.style.top = absoluteTop.value + 'px'
  absoluteBox.style.left = absoluteLeft.value + 'px'
}

absoluteForm.addEventListener('input', (event) => {
  UpdateAbsoluteExample()
})
