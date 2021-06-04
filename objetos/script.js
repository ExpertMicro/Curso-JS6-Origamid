/*const Dom = {
  seletor: 'li',
  element() {
    const elementoSelecionado = document.querySelector(this.seletor);
    return elementoSelecionado;
  },
  ativar() {
     this.element().classList.add('ativar');
  }
}
*/

/*function Dom(seletor) {
  this.element = function() {
    return document.querySelector(this.seletor);
  },
  this.ativar = function() {
    this.element().classList.add('ativar');
  }
}

const li = new Dom('li');*/

/*function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + ' Andou')
  }
}

const joao = new Pessoa('João', 20);
console.log(joao);*/

/*function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe) {
    elementList.forEach((element) => {
      this.element.classList.add(classe);
    });
  }
}

const listaItens = new Dom('li');*/

/*function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const oziel = new Pessoa('Oziel', 28);

Pessoa.prototype.andar = function() {
  return 'Pessoa andou';
}

//console.log(Pessoa.prototype);

const pais = 'Brasil';*/

/*function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const oziel = new Pessoas('Oziel', 'Gonçalves', 28);
console.log(oziel.nomeCompleto);*/

const comida = 'Pizza';
const agua = new String('água');

const frase = 'A melhor linguagem é ';
const linguagem = 'Javascript';
//console.log(frase[frase.length - 1]);// pega a última letra da frase
//console.log(frase[2]);

const fraseFinal = frase.concat(linguagem, '!!!', '???');
//console.log(fraseFinal);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

//console.log(fruta.includes(listaFrutas));//false
//console.log(listaFrutas.includes(fruta));//true
//console.log(listaFrutas.includes(fruta, 14));//false

//console.log(fruta.startsWith('Ba'));// true
//console.log(fruta.startsWith('ba'));// false
//console.log(fruta.endsWith('na')); // true
//console.log(fruta.endsWith('nas')); //false

const transacao01 = 'Depósito de cliente';
const transacao02 = 'Depósito de fornecedor';
const transacao03 = 'Taxa de camisas';

//console.log(transacao01.slice(3, 6)); // ósi
//console.log(transacao01.slice(0,3)); // Dep
//console.log(transacao01.slice(10)); // e cliente
//console.log(transacao01.slice(0, -2)); // Depósito de clien
//console.log(transacao01.slice(-5)); // iente

//console.log(fruta.indexOf('B')); // 0
//console.log(fruta.indexOf('n')); // 2
//console.log(fruta.lastIndexOf('n')); // 4
//console.log(fruta.lastIndexOf('a')); // 5

const preco = 'R$ 99,00';

//console.log(preco.padStart(2, '-'));
//console.log(preco.padEnd(2, '-'));

const frase2 = 'tá';
//console.log(frase2.repeat(5));// repete 5 vezes a string 'tá'

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
//console.log(listaItens);

listaItens = listaItens.replace('Camisas', 'Shirts');
//console.log(listaItens);

const arrayLista = listaItens.split(', ');
//console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
//console.log(htmlArray);
const novohtml = htmlArray.join('section');
//console.log(novohtml);


const valor = ' R$ 23.00 '; //remove os espaços
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00 '
valor.trimEnd(); // ' R$ 23.00'


const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = item.valor.replace('R$ ', '');
  if(item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal = taxaTotal + parseInt(numeroLimpo);
  }
  else {
    recebimentoTotal = recebimentoTotal + parseInt(numeroLimpo)
  }
});

//console.log(taxaTotal);
//console.log(recebimentoTotal);

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';');
//console.log(arrayTransportes);

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlArray02 = html.split('span').join('a');
//console.log(htmlArray02);

const frase04 = 'Melhor do ano!';
//console.log(frase04.slice(-1));


const transacoes06 = ['Taxa do Banco', '  TAXA DO PÃO', '  taxa do mercado', 'deposito bancário', 'TARIFA especial'];
let  taxasTotall = 0;
transacoes06.forEach((item) => {
  item = item.toLocaleLowerCase().trim().slice(0, 4);
  
  if(item === 'taxa') {
    taxasTotall++;
  }
});

console.log(taxasTotall);