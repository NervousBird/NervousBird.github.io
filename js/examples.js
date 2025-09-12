// --- Relative --- //
const relativeBox = document.querySelector('.box-relative')

relativeBox.style.top = '0px'
relativeBox.style.left = '0px'

const UpdateRelativeExample = () => {
  if (document.querySelector('#relative').checked) {
    relativeBox.style.position = 'relative'
  } else {
    relativeBox.style.position = 'static'
  }
  relativeBox.style.top = document.querySelector('#relative-top').value + 'px'
  relativeBox.style.left = document.querySelector('#relative-left').value + 'px'
}

document
  .querySelector('.relative-inputs')
  .addEventListener('input', (event) => {
    UpdateRelativeExample()
  })

// --- Absolute --- //
const absoluteBox = document.querySelector('.box-absolute')

absoluteBox.style.top = '0px'
absoluteBox.style.left = '0px'

const UpdateAbsoluteExample = () => {
  if (document.querySelector('#absolute').checked) {
    absoluteBox.style.position = 'absolute'
  } else {
    absoluteBox.style.position = 'static'
  }
  absoluteBox.style.top = document.querySelector('#absolute-top').value + 'px'
  absoluteBox.style.left = document.querySelector('#absolute-left').value + 'px'
}

document
  .querySelector('.absolute-inputs')
  .addEventListener('input', (event) => {
    UpdateAbsoluteExample()
  })

// --- Fixed --- //
const fixedBox = document.querySelector('.box-fixed')

fixedBox.style.top = '0px'
fixedBox.style.left = '0px'

const UpdateFixedExample = () => {
  if (document.querySelector('#fixed').checked) {
    fixedBox.style.position = 'fixed'
  } else {
    fixedBox.style.position = 'static'
  }
  fixedBox.style.top = document.querySelector('#fixed-top').value + 'px'
  fixedBox.style.left = document.querySelector('#fixed-left').value + 'px'
}

document.querySelector('.fixed-inputs').addEventListener('input', (event) => {
  UpdateFixedExample()
})
