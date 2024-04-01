const searchBarContainer = document.querySelector('.search-bar-container');
const searchBtn = document.querySelector('.search-btn');
const searchInputContainer = document.querySelector('.search-input-container');
const searchInput = document.querySelector('.search-input');


searchBtn.addEventListener('click', () => {
    searchBarContainer.style.width = "100%";
    searchBarContainer.style.borderRadius = "10px";
    searchInputContainer.style.display = "block"
    searchInput.style.display = 'block';
    searchInput.style.width = '100%';
})

document.body.addEventListener('click', (event) => {
    if (event.target !== searchBtn && !searchBarContainer.contains(event.target)) {
        searchBarContainer.style.width = '1rem';
        searchBarContainer.style.borderRadius = "50%";
        searchBarContainer.style.justifyContent = "center";
        searchInput.style.display = 'none';
        searchInputContainer.style.display = 'none';
    }
  });