/*
      Flags

//g 
Faz uma procura global

//i
Aplica o case insensitive


***********************************************

/./g
Seleciona toda a string incluindo os espaços

/[.]/g ou /\./g
Seleciona os pontos

/Ju[nl]ho/gi
Seleciona Junho ou Julho

/[a-z]/g
Faz uma busca de a à z

/[a-zA-Z]/g
Faz um busca de a à z e A à Z

/[^]/g
Seleciona tudo

/[^.]/g
Seleciona tudo menos os pontos(nega o ponto)


*/

const padraoRegexp = /a/g;

const texto = 'JavaScript';
const novoTexto = texto.replace(padraoRegexp, 'n');
console.log(novoTexto);

const regexp = /[-.]/g; // Procura - ou .
'111.222-333-44'.replace(regexp, ''); //11122233344