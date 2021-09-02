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

/*

const doc = fetch('./docs.txt');


doc.then(response => {
  console.log(response.type);
  if(response.status === 404 ) {
    console.log('Página não existe');
  }
})

*/

/* Exercicio */

const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click' , handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCep.innerText = body;
  })
}

const btcDisplay = document.querySelector('.btc');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
  })
}

//setInterval(fetchBtc, 500);
fetchBtc();


const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada => {
    paragrafoPiada.innerText = piada.value;
  })
}

btnProxima.addEventListener('click', puxarPiada);

puxarPiada()


