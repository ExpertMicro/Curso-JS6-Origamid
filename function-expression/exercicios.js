/*
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));
*/

// IIFE
(function() {
  var nome = 'Oziel';
})();

const active = callback => callback();

active(function() {
  console.log('Teste');
})

/*
//função quer ativa o parametro dela
function active(callback) {
  return callback();
}
*/