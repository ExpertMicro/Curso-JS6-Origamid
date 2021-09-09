const itens = document.querySelectorAll('li');

for(const item of itens) {
  item.classList.add('ativo');
}

for(const windowKey in window) {
  console.log(windowKey + ': ' + window[windowKey])
}