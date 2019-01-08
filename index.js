const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', event => {
  const searchTerm = searchInput.value;
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  const searchLimit = document.getElementById('limit').value;
  
  if(searchTerm === ''){
    showMessage('Please add search term', 'alert');
  }

  event.preventDefault(); //prevents form from submitting to a file
})

function showMessage(message, className){
  const div = document.createElement('div');
  const searchContainer = document.getElementById('search-container');
  const search = document.getElementById('search');

  div.className = `${className}`;
  div.appendChild(document.createTextNode(message));
  searchContainer.insertBefore(div, search);
  //removes alert after 3s
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
};