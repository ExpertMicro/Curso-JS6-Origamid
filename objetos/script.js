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

/*
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
*/
//console.log(taxasTotall);


let novoPreco = 48.49;
novoPreco = novoPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

//console.log(novoPreco);

let numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
//console.log(numeroAleatorio)

const meusNumeros = '4, 5, 20, 8, 9';
const meusNumerosArray = meusNumeros.split(', ');
const numeroMaximo = Math.max(...meusNumerosArray);
//console.log(numeroMaximo)

const listaPrecos = ['R$ 59,99', ' R$ 100,00', 'R$ 230', 'r$ 200'];

function limparPrecos(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma = soma + limparPrecos(preco);
});

//console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

//limparPrecos(listaPrecos[0]);

//const carros = new Array('Ford', 'Fiat', 'Honda');
//carros[2] = 'Ferrari';
//console.log(carros);

const li = document.querySelectorAll('li');
//console.log(li);

const arrayLi = Array.from(li);
//console.log(arrayLi);
Array.isArray(arrayLi); // true
Array.isArray(li); //false

Array.of(10); // []

const frutas10 = ['Banana', 'Pêra', ['Uva Roxa', 'Uva verde']];
//console.log(frutas10[2][0].length); // 8

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort(); // organiza por ordem alfabetica
const idades = [32,21,33,43,1,12,8];
idades.sort();// ordena apenas os primeiros caracteres


const carros = ['Ford', 'Fiat', 'vw'];
carros.unshift('Ferrari');// adiciona o novo conteúdo ao inicio do array
carros.push('Mercedes'); // adiciona o novo conteúdo ao final do array
//console.log(carros)
//console.log(carros.pop());// remove e retorna o último item do array
//console.log(carros.shift());// remove e retorna o primeiro item do array
//console.log(carros.reverse());// inverte a ordem do array

carros.splice(1 , 0, 'Kia', 'Mustang');
//console.log(carros);

carros.splice(3, 2, 'GMC');
//console.log(carros);

const arrayOriginal = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
//console.log(arrayOriginal.copyWithin(2, 0, 3));

//console.log(arrayOriginal.fill('Banana', 0, 2));

const transportes30 = ['Barco', 'Avião'];
const transportes40 = ['Carro', 'Moto'];
//console.log(transportes30.concat(transportes40));// concatena os dois arrays

const languages = ['html', 'css', 'js', 'php', 'python'];
//console.log(languages.includes('css')); // true
//console.log(languages.includes('ruby')); // false
//console.log(languages.indexOf('js')); // 2
//console.log(languages.indexOf('runy')); // -1
//console.log(languages.join()); // html,css,js,php,python

let htmlString02 = '<h2>Título Principal</h2>';
htmlString02 = htmlString02.split('h2');
htmlString02 = htmlString02.join('h1');
//console.log(htmlString02);

//console.log(languages.slice(2, 3));
//console.log(languages.slice()); // retorna uma cópia do array

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
const pComida = comidas.shift();
//console.log(pComida);
//console.log(comidas);
const uComida = comidas.pop();
//console.log(uComida);
//console.log(comidas);

comidas.push('Arroz');
//console.log(comidas);
comidas.unshift('Peixe', 'Batata');
//console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
estudantes.sort();
//console.log(estudantes);
estudantes.reverse();
//console.log(estudantes);
//console.log(estudantes.includes('Joana'));
//console.log(estudantes.includes('Juliana'));


let nossoHtml =  `<section>
                    <div>Sobre</div>
                    <div>Produtos</div>
                    <div>Contato</div>
                  </section>`;

nossoHtml = nossoHtml.split('section');
nossoHtml = nossoHtml.join('ul');
nossoHtml = nossoHtml.split('div');
nossoHtml = nossoHtml.join('li');
//console.log(nossoHtml);

const aquelesCarros = ['Ford', 'Fiat', 'VW', 'Honda'];
const copiaAquelesCarros = aquelesCarros.slice();
//console.log(copiaAquelesCarros);

const carros30 = ['Ford', 'Fiat', 'Honda'];

carros30.forEach((item, index, array) => {
  //console.log(item.toUpperCase());
});

const novaArrayCarros = carros30.map((item, index, array) => {
  return item.toUpperCase();
});

//console.log(novaArrayCarros);
/*
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
];*/

//const tempoAulas = aulas.map(aula => aula.min);

//console.log(tempoAulas);

/*
const aulas = [10, 25, 30];
const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
  //console.log(acumulador, item, index);
}, 100);

const numeros = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros.reduce((anterior, atual) => {
  if(anterior > atual) {
    return anterior;
  }
  else {
    return atual;
  }
}, 0);

//console.log(maiorNumero);
*/


const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
];

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {});

//console.log(listaAulas);

const frutasss = ['Banana', 'Pêra', 'Uvas', '', null, undefined];

const temUva = frutasss.some((item) => {
  return item === 'Uvas';
});

//console.log(temUva);// retorna true ou false

const every = frutasss.every((item) => {
  return item;
});

//console.log(every); retorna false ou true

const indexUva = frutasss.findIndex(item => {
  return item === 'Uvas';
});

//console.log(indexUva);// 2

const numerosss = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numerosss.find(x => x > 45); //88
//console.log(buscaMaior45); //88

const arrayLimpa = frutasss.filter((item) => {
  return item;
});

//console.log(arrayLimpa);// retorna um array

const maiores15 = aulas.filter((aula) => {
  return aula.min > 15;
});

//console.log(maiores15);


const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCursos = arrayCursos.map((item) => {
  const titulo = item.querySelector('h1').innerText;
  const descricao = item.querySelector('p').innerText;
  const aulas = item.querySelector('.aulas').innerText;
  const horas = item.querySelector('.horas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas,
  }
});
//console.log(objetosCursos);

const numerossss = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numerossss.filter((n) => n > 100);

//console.log(maioresQue100);

const instrumentosss = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];

const temBaixo = instrumentosss.some((item) => {
  return item === 'Baixo';
});

//console.log(temBaixo);
/*
function limparPrecos(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma = soma + limparPrecos(preco);
});*/

const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Queijo',
    preco: 'R$ 10,60'
  }
];


let meusPrecos = compras.map((item) => {
  return item.preco;
});

let soma03 = 0;
const precoLimpo = meusPrecos.forEach((preco) => {
  soma03 = soma03 + limparPrecos(preco);
});

//console.log(soma03);

const cars = ['Ford', 'Fiat', 'VW'];
const fruits = ['Banana', 'Uva', 'Pêra'];

cars.forEach.call(fruits, (item) => {
  //console.log(item)
});

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
}

//const ul = new Dom('ul');

//ul.ativo('ativo');

//console.log(ul)

const myCars = {
  marca: 'Ford',
  ano: 2018,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

const honda = {
  marca: 'Honda'
}

const acelerarHonda = myCars.acelerar.bind(honda);
//console.log(acelerarHonda);
//console.log(acelerarHonda(300, 20));
//console.log(myCars);

const meusParagrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(meusParagrafos, (acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);

//console.log(totalCaracteres);

function criarElemento(tag, classe, conteudo) {
  const elemento =  document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

//console.log(criarElemento('li', 'ativa', 'esse é o conteudo'));

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');
//console.log(h1Titulo('Cursos de JavaScript'));


const pessoa = new Object({
  nome: 'André'
});

//console.log(pessoa)
/*
const carro = {
  marca: 'Marca',
  init(valor) {
    this.marca = valor;
    return this;
  },
  rodas: 4,
  acelerar() {
    return this.marca + ' acelerou';
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda01 = Object.create(carro).init('Honda');
//console.log(honda01.acelerar());

const ferrari = Object.create(carro).init('Ferrari');
//console.log(ferrari.acelerar());

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}


const moto = {
  rodas: 2,
  capacete: true,
}

Object.assign(moto, funcaoAutomovel);
console.log(moto);
*/

const moto = {}

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas
    },
    set(valor) {
      this._rodas = valor * 4
    }
  }
});

//console.log(moto);

function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}

//console.log(verificarDado(''));

const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
});

//console.log(quadrado);

const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

//console.log(Object.getOwnPropertyNames(String.prototype));
//console.log(Object.getOwnPropertyNames(Array.prototype));