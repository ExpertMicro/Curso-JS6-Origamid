const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const {backgroundColor, margin, color} = btnStyles;
console.log(backgroundColor);
console.log(margin);
console.log(color);

let cursoAtivo = 'Javascript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo)
console.log(cursoInativo)

const cachorro = {
  nome: 'Bob',
  raça: 'Labrador',
  cor: 'Amarelo',
}

const {cor: cor} = cachorro;