/**
Uma boa prática é dividir os arquivos javascript por módulos e manter uma classe por arquivo

Para isso, é necessário escolher um arquivo para ser o entry point, geralmente o index.js e nele fazer o import dos modulos

Em cada módulo é necessário fazer uma indicação de export na declaração da classe para que ele entenda que precisar exportar ...
... as suas definições para qualquer lugar que o importe

Uma boa prática também é iniciar todo arquivo que represente uma classe por letra maiúscula.

 */
// no arquivo index.js
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

// dentro de cada móudulo....
export class NomeDaClass{
}

//nome do arquivo
    // --> NomeDaClass.js