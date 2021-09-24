export default class ValidarCpf {
  constructor(element) {
    this.element = element;
  }

  limpar(cpf) {
    return cpf.replace(/\D/g, '');
  }

  validar(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return (matchCpf && matchCpf[0] === cpf);
  }

  validaPdigito(cpfElement) {
    const cpfLimpo = this.limpar(cpfElement.value);
    const arrayCpf = Array.from(cpfLimpo);
    let i = 10;
    let k = 0;
    let somaTotalPdigito = 0;

    do {
      somaTotalPdigito = somaTotalPdigito + arrayCpf[k] * i;
      k++;
      i--;
    } while(i > 1);
      
    const restoPdigito = somaTotalPdigito % 11;
    let pDigitoVerificador;

    if (restoPdigito === 1 || restoPdigito === 0) {
      pDigitoVerificador = 0;
      return pDigitoVerificador;
      //arrayCpf.splice(9, 1, pDigitoVerificador);
    }
    else {
      pDigitoVerificador = 11 - restoPdigito;
      return pDigitoVerificador;
      //arrayCpf.splice(9, 1, pDigitoVerificador);
    }

  }

  validaSdigito(cpfElement) {
    const cpfLimpo = this.limpar(cpfElement.value);
    const arrayCpf = Array.from(cpfLimpo);
    let j = 11;
    let l = 0;
    let somaTotalSdigito = 0;
      
    do {
      somaTotalSdigito = somaTotalSdigito + arrayCpf[l] * j;
      l++;
      j--;
    } while(j > 1);
      
    const restoSdigito = somaTotalSdigito % 11;
    let sDigitoVerificador;

    if(restoSdigito === 1 || restoSdigito === 0) {
      sDigitoVerificador = 0;
      return sDigitoVerificador;
      //arrayCpf.splice(10, 1, sDigitoVerificador);
    }
    else {
      sDigitoVerificador = 11 - restoSdigito;
      return sDigitoVerificador;
      //arrayCpf.splice(10, 1, sDigitoVerificador);
    }
  }

  validaDigitos(cpfElement) {
    const arrayCpf = Array.from(this.limpar(cpfElement.value));
    if (this.validaPdigito(this.element) === parseInt(arrayCpf[9]) && this.validaSdigito(this.element) === parseInt(arrayCpf[10])) {
      return true;
    }
    else {
      return false;
    }
  }


  validarNaMudanca(cpfElement) {
    
    const meuCpf = this.limpar(cpfElement.value);
    console.log(meuCpf);
    
    if(meuCpf.length != 11 || meuCpf == '11111111111' || meuCpf == '22222222222' || meuCpf == '33333333333' || meuCpf == '44444444444' || meuCpf == '55555555555' || meuCpf == '66666666666' || meuCpf == '77777777777' || meuCpf == '88888888888' || meuCpf == '99999999999 '|| meuCpf == '0123456789') {
      console.log('cpf valido')

    }
    else {
      console.log('cpf invalido')
    }

    /*
    if(this.validar(cpfElement.value)) {
      this.validaDigitos(cpfElement);
      
    }
    else {

    }*/
  }



  adicionaEvento() {
    this.element.addEventListener('change', () => {
      this.validarNaMudanca(this.element);
    });
  }

  iniciar() {
    this.adicionaEvento();
    return this;
  }

}







/*
CPF contém 11 dígitos

756.606.441-04

7 * 10 = 70
5 * 9 = 45
6 * 8 = 48
6 * 7 = 42
0 * 6 = 0
6 * 5 = 30
4 * 4 = 16
4 * 3 = 12
1 * 2 = 2

Soma dos resultados = 265

265 / 11 = 24,09

Pegando o resta da divisão 265 - (11 * 24) = 1

Regra 1: Se o resto for 0 ou 1, então o primeiro digito verificador é igual a 0

Primeiro digito verificador 0

Regra 2: Se o resto for 2,3,4,5,6,7,8,9,10, então o primeiro digito verificador é a diferença entre o número 11 e o resto da divisão por 11.


7 * 11 = 77
5 * 10 = 50
6 * 9 = 54
6 * 8 = 48
0 * 7 = 0
6 * 6 = 36
4 * 5 = 20
4 * 4 = 16
1 * 3 = 3
0 * 2 = 0

Soma dos resultados = 304

304 / 11 = 27,63

Pegando o resto da divisão 304 - (11 * 27) = 7

Segundo digito verificador 11 - 7 = 4



















validarNaMudanca(cpfElement) {
    if(this.validar(cpfElement.value)) {
      const cpfLimpo = this.limpar(cpfElement.value);
      const arrayCpf = Array.from(cpfLimpo);
      let i = 10;
      let k = 0;
      let somaTotalPdigito = 0;

      do {
        somaTotalPdigito = somaTotalPdigito + arrayCpf[k] * i;
        k++;
        i--;
      } while(i > 1);
      
      const restoPdigito = somaTotalPdigito % 11;
      let pDigitoVerificador;

      if (restoPdigito === 1 || restoPdigito === 0) {
        pDigitoVerificador = 0;
        arrayCpf.splice(9, 1, pDigitoVerificador);
      }
      else {
        pDigitoVerificador = 11 - restoPdigito;
        arrayCpf.splice(9, 1, pDigitoVerificador);
      }

      let j = 11;
      let l = 0;
      let somaTotalSdigito = 0;
      
      do {
        somaTotalSdigito = somaTotalSdigito + arrayCpf[l] * j;
        l++;
        j--;
      } while(j > 1);
      
      const restoSdigito = somaTotalSdigito % 11;
      let sDigitoVerificador;

      if(restoSdigito === 1 || restoSdigito === 0) {
        sDigitoVerificador = 0;
        arrayCpf.splice(10, 1, sDigitoVerificador);
      }
      else {
        sDigitoVerificador = 11 - restoSdigito;
        arrayCpf.splice(10, 1, sDigitoVerificador);
      }

      console.log(arrayCpf)
      
    }


    else {

    }
  }

*/