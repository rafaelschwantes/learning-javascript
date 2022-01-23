/**
Lembrando que ..."Propriedades, atributos e campos são sinonimos no javascript"

Campos privados são campos que não podem ter seus valores alterados em tempo de execução ou fora da classe

Por convenção, usamos o underline antes do nome do campo (_nomeDoCampo) para identificar que aquele campo é privad.

Mas isso é apenas uma convenção de boas práticas e a linguagem não impede de fato que essa alteração aconteça.

Portanto, podemos usar essa convenção no intuito de informar a outros programadores que derem manutenção naquele código específico e que
... souberem dessa convenção, possam identificá-la e respeitá-la.

Existem uma proposta em estágio de aprovação para implementar de fato a definição do campo privado para que a própria linguagem possa impedir essa alteração,
... impedindo que programadores que não estão a par do assunto alterem os campos privados sem saber o que estão fazendo.

Essa proposta já está em funcionamento para testes, mas não está oficializada. Trata-se do # antes da no mome do campo (#nomeDoCampo).
Com isso, sempre que usarmos um cerquilha (ou cardinal) antes do nome do campo, não será permitida a alteração do seu valor fora da clase ...
... e também não será exibido seu valor no console.log
https://github.com/tc39/proposal-class-fields#private-fields
*/


class ContaCorrente{
    agencia;
    #saldo = 0;
    _saldo = 0;

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
        }
        if(this._saldo >= valor){
            this._saldo -= valor;
        }
    }
}


//instancia de uma objeto da classe ContaCorrente
const ContaCorrenteRafeal = new ContaCorrente();

//******************************************************** */
//                  TESTANDO O RETORNDO
//******************************************************** */


console.log('Console do saldo fora da classe', ContaCorrenteRafael.#saldo)

/** Retorno ao chamar o campo fora da classe
 * fora da classe
 console.log('Saldo inicial:', ContaCorrenteRafeal.#saldo)
                                                 ^

SyntaxError: Private field '#saldo' must be declared in an enclosing class
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1031:15)
    at Module._compile (node:internal/modules/cjs/loader:1065:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)>)
    at node:internal/main/run_main_module:17:47
 */

console.log('Saldo: ', ContaCorrenteRafael._saldo)
//Saldo: 0

