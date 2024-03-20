import './Header.css';
import { Button } from '/src/Button/Button'
import { SearchBar } from '/src/SearchBar/SearchBar'
import { Logo } from '/src/Logo/Logo'

const tagTemplateHeader = `
    ${Logo()}
    ${Button()}
    ${SearchBar()}
`;

const appContainer = document.getElementById('app');
const headerContainer = `<header class="header-container"></header>`

export const renderHeader = () => {
    appContainer.innerHTML += headerContainer;
    document.body.querySelector(".header-container").innerHTML = tagTemplateHeader;
};