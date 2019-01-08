const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', event => {
  console.log("search event");
  event.preventDefault(); //prevents form from submitting to a file
})