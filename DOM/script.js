//Retorna a URL da página
const href = window.location.href;
console.log(href);

//Retorna a classe ativo
const elementoAtivo = document.querySelector('.ativo');

//Retorna a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);



/*const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
//console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

const rect = primeiroh2.getBoundingClientRect();
console.log(rect);

const small = window.matchMedia('(max-width: 600px');
console.log(small);
*/

/*const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);
*/

/*const imgs = document.querySelectorAll('img');
let soma = 0;
imgs.forEach((img) => {
  soma = soma + img.offsetWidth;
});

console.log(soma);
*/

/*const animais = document.querySelector('.animais');
const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.insertBefore(animais, titulo)*/
/*const mapa = document.querySelector('.mapa');

const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo título';
novoh1.classList.add('titulo');

mapa.appendChild(novoh1);*/

/*const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);
faq.appendChild(cloneH1);*/

/*const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);*/

const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');

const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);

const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;


