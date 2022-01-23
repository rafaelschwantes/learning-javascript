/**
Early return é uma metodologia para evitar identação demasiada dentro da função

Em condicionais necessárias em cadeias, usamo o método early return para ...
... criar uma estrutura de código alinhada

Ao invés de ifs dentro de ifs, podemos ter condicões de tudo que não quero...
... no início da função, com o return sendo utilizado como cancelamento ...
... da função a partir daquela linha
 */

class ContaCorrente{
    agencia;
    _saldo = 0;

    //Criação e definição dos comportamentos da Função sacar
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    //Criação e definição dos comportamentos da Função depositar
    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            return valor;
        }
    }
}

const ContaCorrenteRafeal = new ContaCorrente();

console.log(' ---- Console fora da classe -----')
const valorSacado = ContaCorrenteRafeal.depositar(50);
console.log('valorSacado:', valorSacado)
console.log('Saldo inicial:', ContaCorrenteRafeal._saldo)

/**
 Retorno sem o uso da expressão return

 ---- Console do deposito fora da classe -----
valorSacado: undefined  -------> aqui o valor da função não está disponível fora da classe
Saldo inicial: 50
 */

/**
 Retorno com o uso da expressão return

 ---- Console do deposito fora da classe -----
valorSacado: 50 -------> aqui o valor da função está disponível fora da classe
Saldo inicial: 50
 */



