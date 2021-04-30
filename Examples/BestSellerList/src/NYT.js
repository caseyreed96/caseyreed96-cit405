import api_key from "./secret/api_keys.js"; //Store API Keys separately

const API_KEY = api_key.nytimes_api_key; //Grab key from secret/api_keys.js
const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists/";
const API_STEM_SEARCH = "https://api.nytimes.com/svc/books/v3/reviews/";

function fetchBooks(list_name = LIST_NAME) {
  let url = `${API_STEM}/${LIST_NAME}?response-format=json&api-key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson.results.books);
      return responseJson.results.books;
    })
    .catch(error => {
      console.error(error);
    });
}

function searchNYT(searchType, searchString) {
  let urlSearchString=searchType + "=" + searchString;
  let url = `${API_STEM_SEARCH}?${urlSearchString}&response-format=json&api-key=${API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson.results);
      return responseJson.results;
    })
    .catch(error => {
      console.error(error);
    });
}

export default { fetchBooks: fetchBooks, searchNYT: searchNYT };
