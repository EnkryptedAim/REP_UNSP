import './SearchBar.css'

export const SearchBar = () => { 
    const serachbarTagTemplate = `<div class="search-bar-container">
    <input type = "search" class = "search-bar" placeholder = "🔎 Search" id = "query-input">
    </div>`
    return serachbarTagTemplate;
};