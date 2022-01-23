/**
A função executa uma tarefa dentro do seu escopo.

Se quisermos utilizar  algum valor dessa função fora do seu escopo ...
... devenos invocar o return desse valor.

O return sozinho para a execução da função na linha que estiver

O return deve ser a última linha da função, pois ela sai da função a partir dali.

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



