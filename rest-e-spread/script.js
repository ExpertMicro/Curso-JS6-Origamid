//Rest é um array / aguments é um objeto
//Só é possivel ter um único parâmetro rest e ele deve ser o último
/*
function perimetroForma(lado, totalLados, ...listaArgumentos) {
  console.log(listaArgumentos);
  console.log(arguments)
  return lado * totalLados;
}

perimetroForma(10, 20, 30, 'Oi', 'Teste');
*/

/*
function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach(ganhador => {
    console.log(ganhador + ' ganhou um ' + premio)
  });
}

anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria', 'Beto');
*/

//Spread não se usa como parâmetro. Ele sempre vai distribuir um item iteravel

const frutas = ['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes]
console.log(comidas)

const meusNumeros = [1,2,3,4,5,9,12,15,20];
const numeroMaximo = Math.max(...meusNumeros);

console.log(numeroMaximo);

const btns = document.querySelectorAll('button');
//Transforma nodelist em array
const btnsArray = [...btns];

console.log(btnsArray)