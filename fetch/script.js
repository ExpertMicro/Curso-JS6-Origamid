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