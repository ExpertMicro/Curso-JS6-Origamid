/*
const carro = {
  marca: 'Honda',
  ano: 2018
}

const {marca, ano} = carro;

console.log(marca, ano)
*/

/*
const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Rational Male', 'Shell Script'],
      videos: ['He-man', 'Lord of the ring']
    },
    fisicos: {
      cadernos: ['Hayek']
    }
  }
}

const {livros, videos} = cliente.compras.digitais;
console.log(videos)
*/

//destructuring arrays

const frutas = ['Banana', 'Uva', 'Morango'];

const [primeira, segunda, terceira] = frutas;

//console.log(terceira)

//ou 

const [um, dois, tres] = ['Item 1', 'Item 2', 'Item 3'];
//console.log(um)


//desestruturação de argumentos
function handleKeyboard({key, keyCode}) {
  console.log(key, keyCode)
}


document.addEventListener('keyup', handleKeyboard);

