import reddit from './redditapi'

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', event => {
  const searchTerm = searchInput.value;
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  const searchLimit = document.getElementById('limit').value;
  
  if(searchTerm === ''){
    showMessage('Please add search term', 'alert');
  }

  searchInput.value = ''; //clear the input
  reddit.search(searchTerm, searchLimit, sortBy)
    .then(results => {
      let output = '<div>';
      results.forEach(post => {
        console.log(results);
        output += `
        <div class="card columns">
          <h4>${post.title}</h4>
          <h5>${post.selftext}</h5>
          <img src='https://31p86334w2bvkz0249eyr0cr-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg'
        </div>
        `;
        output += '</div>';
      });
      document.getElementById('results').innerHTML = output;
    });

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