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
      console.log(results);
      let output = '<div>';
      results.forEach(post => {
        const image = post.preview ? post.preview.images[0].source.url : 'https://www.redditinc.com/imager/images/904/extra-life-2017-banner_ea0f9a61260ba9d9e366e64dba3a84f4.png';

        output += `
        <div class="card">
          <h4>${post.title}</h4>
          <h5>${truncateText(post.selftext, 100)}</h5>
          <img src="${image}">
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

function truncateText(text, limit) {
  const shortened = text.indexOf(' ', limit) //limit = no. of characters
  if(shortened == -1) return text;
  return text.substring(0, shortened);
}