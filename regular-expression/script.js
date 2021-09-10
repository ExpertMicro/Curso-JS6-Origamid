/*
      Flags

//g 
Faz uma procura global

//i
Aplica o case insensitive


***********************************************

/./g
Seleciona todos os caracteres, menos as quebra de linhas

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

/\w/g ou /[A-Za-z0-9_]/
Seleciona todos os caracteres alfanumericos

/\W/g
Seleciona tudo que não for alfanumerico

/\d/g
Seleciona tudo que é digito

/\D/g
Seleciona tudo que não for digito

/\s/g
Seleciona tudo que for espaço, quebra de linha ou tab

/\S/g
Seleciona tudo que não for espaço, quebra de linha ou tab

Quantificador

/i{4}/g
Seleciona quatro i

/i{2,4}/g
Seleciona mínimo 2 i e máximo 4 i

/i{2,}/g
Seleciona a partir de 2 i

/i+/g
Seleciona um i ou mais de um i (seleciona um palavra inteira de i)

O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências

O sina ? significa que o caracter é opcional, pode ou não existir

/regex?p?/g

O sinal | irá selecionar um ou outro.

/tamanho|lobos/g
Seleciona tamanho ou lobos

Word Boundary \b

O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.

/\bpropor\b/

Not Word Boundary \B
É o contrário do \b.

Anchor Beginning

Com o ^ é possível informar que a busca deve ser iniciada no inicio da linha

O \n irá selecionar o final de uma linha, quando criamos uma nova.

Unicode \u

O \u irá selecionar o respectivo caracter unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.


Grupo de Captura

É possível definirmos grupos de captura, que poderão ser referenciados durante a substituição. Basta envolvermos um grupo entre () parênteses. A referência se cada grupo será feita com $n, sendo o primeiro $1.



Mais do que Captura apenas

Um grupo também serve para agruparmos uma sequência de caracteres que queremos em repetição.


Positive Lookahead

Faz a seleção dos itens que possuírem o padrão dentro de (?=) à sua frente. Apesar de utilizar () parênteses o positive lookahead não captura grupo.


*/

const padraoRegexp = /a/g;

const texto = 'JavaScript';
const novoTexto = texto.replace(padraoRegexp, 'n');
//console.log(novoTexto);

const regexp = /[-.]/g; // Procura - ou .
'111.222-333-44'.replace(regexp, ''); //11122233344

// Not Word Boundary \B
const regexDigito = /\B\d+\B/gi;
'11_22 33-44 55é66 77e88'.replace(regexDigito, 'X');
//1X_X2 33-44 55é66 7XeX8

//Anchor Beginning
const  regexxx = /^\w+/g;
`andre@origamid.com
constato@origamid.com`.replace(regexxx, 'X');
// X@origamid.com
//contato@origamid.com

//Anchor End
const  regexxx0 = /^\w+$/g;
`andre@origamid.com
constato@origamid.com`.replace(regexxx0, 'X');
//seleciona o "com" da última linha

const regexxz = /\n/g;

`andre@origamid.com\ncontato@origamid.com`.replace(regexxz, '---');
//andre@origamid.com---contato@origamid.com

//Procura: @ ou ©
const regexlll = /\u0040|\u00A9/g;
'andre@origamid.com ©'.replace(regexlll, '---');
// andre---origamid.com ---


//Grupo de captura

const regexttt = /(\w+)@[\w.]+/g;

'andre@email.com.br'.replace(regexttt, '$1@gmail.com');
//andre@gmail.com

//não usar esse regex para emails, ele falha em alguns casos


//Procura: qualquer senquência de ta
const regexooo = /(ta)+/gi;


'Tatata, tata , ta'.replace(regexooo, 'Pá');
//Pá, Pá, Pá



//Positive Lookahead

//Procura dígitos em sequência, que possuírem px, sem selecionar o px.
const regexiii = /\d(?=px)/g;
'2em, 4px, 5%, 2px, 1px'.replace(regexiii, 'X');
//2em, Xpx, 5%, Xpx, Xpx


const listaFrutas = 'Melancia,banana,Morango,Uva,Jabuticaba';

// transforma a listaFrutas em um array de frutas
const arrayFrutas = listaFrutas.split(',');

//Expressão regular que seleciona todas as vogais
const vogalRegex = /[aeiou]/gi;
let maior = 0;
let palavraComMaisVogal = '';

arrayFrutas.forEach(item => {
      //O método match recupera o resultado da correspondência de uma string com uma expressão regular
      const vogal = item.match(vogalRegex, "");
      //console.log(vogal)  
      if(vogal.length > maior) {
            maior = vogal.length;
            palavraComMaisVogal = `${vogal.length} ${item}`;
      }
      
      
});
//console.log(palavraComMaisVogal);

const regexCep = /\d{5}[-\s]?\d{3}/g;

const ceps = [
      '00000-000',
      '00000 000',
      '00000000'
];

for(cep of ceps) {
      //console.log(cep, cep.match(regexCep));
}

const regexCpf = /(?:\d{3}[.-]?){3}\d{2}/g;

const cpfs = [
      '000.000.000-00',
      '000-000-000-00',
      '000.000.000.00',
      '000000000-00',
      '00000000000'
];

for(cpf of cpfs) {
      //console.log(cpf, cpf.match(regexCpf));
}


const regexCnpj = /\d{2}[-.]?(?:\d{3}[-.]?){2}\/?\d{4}[-.]?\d{2}/g;

const cnpjs = [
      '00.000.000/0000-00',
      '00000000000000',
      '00-000-000-0000-00',
      '00.000.000/000000',
      '00.000.000.000000',
      '00.000.000.0000.00'
];

for(cnpj of cnpjs) {
      console.log(cnpj, cnpj.match(regexCnpj));
}



