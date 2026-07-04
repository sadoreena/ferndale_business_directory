import { businessCategories } from './businesses.js'

export function createCard(business) {
  const name = business.name.split(' ')
  const nameSplit = name.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
  const nameJoin = nameSplit.join(' ')

  return `
    <div class="card">
      <a target="_blank" href=${business.web_url}><img class="bus-img" src='${business.photo_url}'></a>
      <div class="option-text">
        <h1>${nameJoin}</h1>
        <a id='bus-url' target="_blank" href=${business.web_url}>Visit the Website</a>
      </div>
    </div>
  `
}

export function renderBusinesses(categories, container) {
  categories.forEach(category => {
    const section = document.createElement('section')
    section.className = 'business-category'

    const heading = document.createElement('heading')
    heading.className = 'category-name'
    heading.textContent = category.name

    const cardsWrapper = document.createElement('div')
    cardsWrapper.className = 'cards-wrapper'

    category.businesses.forEach(business => {
      cardsWrapper.innerHTML += createCard(business)
    })

    section.appendChild(heading)
    section.appendChild(cardsWrapper)

    container.appendChild(section)
  })
}

export function renderCategories(categories, container) {
  container.innerHTML = ''
  const categoryDiv = document.createElement('div')
  categoryDiv.className = 'category-div'

  const button = document.createElement('button')
  button.className = 'category-btn'
  button.textContent = 'all'

  button.addEventListener('click', () => {
    renderCategories(categories, container)
    renderBusinesses(businessCategories, container)
  })

  categoryDiv.appendChild(button)

  categories.forEach(category => {
    const button = document.createElement('button')
    button.className = 'category-btn'
    button.id = category.name
    button.textContent = category.name

    button.addEventListener('click', () => { filterCategories(category.name, categories, container) })

    categoryDiv.appendChild(button)
  })

  container.appendChild(categoryDiv)
}

export function filterCategories(input, categories, container) {
  container.innerHTML = ''

  const filtered = categories.filter(category => category.name === input)

  renderCategories(categories, container)
  renderBusinesses(filtered, container)

  const categoryButton = document.getElementById(`${input}`)
  console.log(categoryButton)
  categoryButton.style.backgroundColor = 'var(--text-secondary)'
  categoryButton.style.color = 'var(--component-secondary)'
}

const searchBar = document.getElementById('search-bar')

export function searchBusinesses(container, categories) {
  const input = searchBar.textContent
  container.innerHTML = ''

  const filtered = categories.filter(category => console.log(category.name) === input)

  renderCategories(categories, container)
  renderBusinesses(filtered, container)
}
