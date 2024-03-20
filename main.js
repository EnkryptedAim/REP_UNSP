import './style.css'
import { renderHeader } from './src/Header/Header'
import { renderFooter } from './src/Footer/Footer'
import {
  renderImages,
  refreshButton,
  query
} from './src/ImageImports/ImageImports'

const init = async () => {
  renderHeader()
  await renderImages()
  renderFooter()
  document.body
    .querySelector('.button-refresh-home')
    .addEventListener('click', refreshButton)
  document.body
    .querySelector('.search-bar')
    .addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault()
        query(document.getElementById('query-input').value)
      }
    })
}

init()
