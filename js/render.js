export function createCard (business) {
  return `
    <div class="card">
      <a target="_blank" href=${business.web_url}><img class="bus-img" src='${business.photo_url}'></a>
      <div class="option-text">
        <h1>${business.name}</h1>
        <a id='bus-url' target="_blank" href=${business.web_url}>Visit the Website</a>
      </div>
    </div>
  `
}

export function renderBusinesses (categories, container) {
  container.innerHTML = ''
  categories.forEach(category => {
    console.log(category)
    const section = document.createElement('section')
    section.className = 'business-category'

    const heading = document.createElement('heading')
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
