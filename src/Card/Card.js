import './Card.css'
import { unsplashLogo } from '../Logo/Logo';

export const Card = (url,id,portfolio_url) => {
    const tagTemplate = `
    <div class = "card-container ${id}" id = "${id}">
    <img src = "${url}" class = "photo">
    <div class="description-container">
    <a
      href="${portfolio_url}"
      id="portfolio-link"
      target="_blank"
      >
      <img src = "${unsplashLogo}" class = "unslplash-logo">
      </a
    >
    </div>
    </div>
    `
    return tagTemplate;
};
