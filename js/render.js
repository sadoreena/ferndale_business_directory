export function createCard (business) {
  return `
    <div class="card">
      <a target="_blank" href=${business.web_url}><img class="bus-img" src='${business.photo_url}'></img></a>
      <div class="option-text">
        <h1>${business.name}</h1>
        <a id='bus-url' target="_blank" href=${business.web_url}>Visit the Website</a>
      </div>
    </div>
  `
}

export function renderBusinesses (businesses, container) {
  container.innerHTML = businesses.map(createCard).join('')
}
