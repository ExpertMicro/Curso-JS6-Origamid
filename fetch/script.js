/*
const sobre = fetch('./sobre.html');

const div = document.createElement('div');

sobre.then(resolucao => {
  return resolucao.text();
}).then((body) => {
  div.innerHTML = body;
  const titulo = div.querySelector('h1');
  document.querySelector('h1').innerText = titulo.innerText;
  console.log(titulo);
})

*/

/*
const img = fetch('./jpakC4a.png');

img.then(resolve => resolve.blob())
.then(body => {
  const blobUrl = URL.createObjectURL(body);
  const imagemDom = document.querySelector('img');
  imagemDom.src = blobUrl;
});

*/

/*
const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(r => {
  const r2 = r.clone();
  r.text().then((text) => {
    console.log(text)
  })
  r2.json().then((json) => {
    console.log(json)
  })
  console.log(r)
})
.then(body => {
  console.log(body);
});
*/

/*
const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then(response => {
  //response.headers.forEach(console.log);
  console.log(response.status);
});
*/

const doc = fetch('./docs.txt');


doc.then(response => {
  console.log(response.type);
  if(response.status === 404 ) {
    console.log('Página não existe');
  }
})





