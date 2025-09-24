// Dropdown menu logics
const dropdownElements = document.querySelectorAll('.dropdown')

// Making a universal function for adding dropdown functions
const addDropdownMenuEvent = (buttonID) => {
  const buttonElement = document.getElementById(buttonID)
  const container = buttonElement.parentElement.querySelector('.dropdown') // <== use this for ALL dropdown lists

  buttonElement.addEventListener('click', (event) => {
    dropdownElements.forEach((popup) => {
      popup.style.display = 'none'
    })
    if (container.style.display === 'grid') {
      container.style.display = 'none'
    } else {
      container.style.display = 'grid'
    }
    event.stopPropagation()
  })
}

addDropdownMenuEvent('navbar-button')

const hideDropdownsOnWindow = () => {
  document.querySelectorAll('.dropdown').forEach((options) => {
    options.addEventListener('click', (event) => {
      window.onclick = (e) => {
        if (e.target != event.target) {
          document.querySelectorAll('.dropdown').forEach((popup) => {
            popup.style.display = 'none'
          })
        }
      }
    })
  })

  document.querySelector('.dropdown').click()
}

hideDropdownsOnWindow()

// --- Generating blog dropdown contents --- //
let blogDropdown = [
  {
    name: 'Te Houtaewa',
    link: '/blog/te-houtaewa-template.html',
  },
  {
    name: 'HTML-CSS',
    link: '/blog/html-css.html',
  },
  {
    name: 'Identity & Values',
    link: '/blog/identity-values.html',
  },
  {
    name: 'Learning Plan',
    link: '/blog/learning-plan.html',
  },
  {
    name: 'Emotional Intelligence',
    link: '/blog/emotional-intelligence.html',
  },
  {
    name: 'Javascript and the DOM',
    link: '/blog/javascript-dom.html',
  },
  {
    name: 'Problem Solving',
    link: '/blog/problem-solving.html',
  },
  {
    name: 'Neuroplasticity',
    link: '/blog/neuroplasticity.html',
  },
  {
    name: 'Te Whare Tapa Wha',
    link: '/blog/te-whare-tapa-wha.html',
  },
  {
    name: 'Foundations Reflection',
    link: '/blog/foundations-reflection.html',
  },
]

const generateDropdownContent = (array, list) => {
  let parent = document.getElementById(list)
  array.forEach((object) => {
    let listItem = document.createElement('li')
    let listLink = document.createElement('a')
    listLink.href = object.link
    listLink.innerHTML = object.name
    listItem.appendChild(listLink)
    parent.appendChild(listItem)
  })
}

generateDropdownContent(blogDropdown, 'blogDropdown')
