/**
 Propriedades atributos e campos são sinônimos no javascript

 A classe é o meu molde e define a regra de negócio
 O objeto é a instancia desse molde, ou seja, um elemento criado a partir dessa regra

 */

//Criar uma classe para representar um cliente e não repetir código
class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

//instanciar um objeto a partir dessa classe
const cliente1 = new Cliente();
const cliente2 = new Cliente();

// atribuição de valores aos atributos da classe
//Não preciso da palavra reservada const
cliente1.nome = "Rafael";
cliente1.cpf = 11122233344;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 8889999888;
// saída --> Cliente { nome: 'Rafael', cpf: 11122233344, agencia: 1001, saldo: 0 }

cliente2.nome = "Carla";
cliente2.cpf = 22233344455;
cliente2.agencia = 1001;
cliente2.saldo = 0;
// saída --> Cliente { nome: 'Carla', cpf: 22233344455, agencia: 1001, saldo: 0 } 

console.log(cliente1)
console.log(cliente2)

/** saída -->
 Cliente {
  nome: 'Rafael',  
  cpf: 11122233344,
  agencia: 1001,   
  saldo: 0,        
  rg: 8889999888   
}
Cliente {
  nome: 'Carla',   
  cpf: 22233344455,
  agencia: 1001,   
  saldo: 0,        
  rg: undefined    
} 
 
 */