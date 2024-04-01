const searchBarContainer = document.querySelector('.search-bar-container');
const searchBtn = document.querySelector('.search-btn');
const searchInputContainer = document.querySelector('.search-input-container');
const searchInput = document.querySelector('.search-input');

// console.log(searchBtn)

//a click on the search button should change the width of the search bar container.
searchBtn.addEventListener('click', () => {
    searchBarContainer.style.width = "100%";
    searchInputContainer.style.display = "block"
    searchInput.style.display = 'block';
    searchInput.style.width = '100%';
})

document.body.addEventListener('click', (event) => {
    if (event.target !== searchBtn && !searchBarContainer.contains(event.target)) {
        searchBarContainer.style.width = '1rem'; // Shrink width back to 100px
        searchBarContainer.style.justifyContent = "center";
        searchInput.style.display = 'none';
        
    }
  });