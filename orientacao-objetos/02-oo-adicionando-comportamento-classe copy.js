/**
Métodos e funções são sinônimos.
Métodos e funções são comportamentos que a classe pode ter e executar.
*/

//1 - Fazendo a abstração das classe anteriro, posso criar uma segunda classe apenas para os dados da conta, separando dos dados do clinte
class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

//instancia de uma objeto da classe ContaCorrente
const ContaCorrenteRafeal = new ContaCorrente();
// atribuição de valores aos atributos da classe
ContaCorrenteRafeal.saldo = 0;
ContaCorrenteRafeal.agencia = 1001;

//******************************************************** */
//                  TESTANDO O RETORNDO
//******************************************************** */



console.log('Saldo inicial:', ContaCorrenteRafeal.saldo)
ContaCorrenteRafeal.depositar(300);
console.log('Saldo após dep 300:', ContaCorrenteRafeal.saldo)
ContaCorrenteRafeal.sacar(175);
console.log('Saldo após saque 175:', ContaCorrenteRafeal.saldo)
ContaCorrenteRafeal.sacar(200);
console.log('Saldo após saque de 200:', ContaCorrenteRafeal.saldo)
ContaCorrenteRafeal.depositar(-100);
console.log('Saldo após dep menor que 0:', ContaCorrenteRafeal.saldo)

/*
Saldo inicial 0: -- ok
Saldo após dep 300: 300  -- ok
Saldo após saque 175: 125 -- ok
Saldo após saque de 200: 125 -- não executou devido às definições da função sacar
Saldo após dep menor que 0: 125 -- não executou devido às definições da função depositar
*/
