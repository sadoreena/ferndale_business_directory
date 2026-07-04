import { businessCategories } from './businesses.js'
import { renderBusinesses, renderCategories /*,  searchBusinesses */ } from './render.js'

const cardView = document.getElementById('card-view-btn')
const listView = document.getElementById('list-view-btn')
const mainElement = document.getElementById('view')

listView.addEventListener('click', () => {
  if (!mainElement.classList.contains('list-view')) {
    mainElement.classList.add('list-view')
  }
  document.getElementById('list-view-btn').style.border = '1px solid white'
  document.getElementById('card-view-btn').style.border = 'none'
})

cardView.addEventListener('click', () => {
  mainElement.classList.remove('list-view')

  document.getElementById('card-view-btn').style.border = '1px solid white'
  document.getElementById('list-view-btn').style.border = 'none'
})

// searchBusinesses(mainElement, businessCategories)
renderCategories(businessCategories, mainElement)
renderBusinesses(businessCategories, mainElement)
