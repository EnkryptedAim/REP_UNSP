import './Logo.css'
export const unsplashUrl = 'https://unsplash.com/es'
export const unsplashLogo = '/Unsplash-logo.png'

export const Logo = () => { 
    const logoTagTemplate = `<div class="logo-container">
    <a href = "${unsplashUrl}" class = "unsplash-link" target="_blank">
    <img src = "${unsplashLogo}" class = "unslplash-logo">
    </a>
  </div>`
    return logoTagTemplate;
};