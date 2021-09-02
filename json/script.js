fetch('./dados.json')
.then(r => r.text())
.then(jsonText => {
  const jsonFinal = JSON.parse(jsonText);
  //console.log(jsonFinal);
  
})

const config = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 Javascript",
}

//const stringConfig = JSON.stringify(config);
//console.log(stringConfig)

localStorage.config = JSON.stringify(config);
console.log(JSON.parse(localStorage.config));