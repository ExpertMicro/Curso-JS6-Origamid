/*
fetch('https://pokeapi.co/api/v2/pokemon/1/')
.then(response => response.json())
.then(pokemon => {
  console.log(pokemon);
})
*/

const url = 'https://jsonplaceholder.typicode.com/posts';
const options = {
  method: 'POST',
  body: '{"title": "Javascript"}',
  headers: {
    "Content-Type": "aplication/json; charset=utf-8"
  }
}

fetch(url, options)
.then(response => response.json())
.then(json => console.log(json))