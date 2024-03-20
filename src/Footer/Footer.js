import './Footer.css';
import { unsplashUrl } from '../Logo/Logo';

const tagTemplateFooter = `
<div class="border-container">
  <div class="project-credits-container">
  <a href = "${unsplashUrl}" class = "unsplash-link" target="_blank">  
  <p>Powered with Unsplash</p>
  </a>
  </div>
  <div class="links-container">
        <a href="https://santihuerta.netlify.app/" id="personalweb-link" target="_blank"
      >shds</a
    >
  </div>
</div>
`;

const appContainer = document.getElementById('app');
const footerContainer = `<footer class="footer-container"></footer>`

export const renderFooter = () => {
    appContainer.innerHTML += footerContainer;
    document.body.querySelector(".footer-container").innerHTML = tagTemplateFooter;
};