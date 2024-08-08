//======================================================================//
//Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

const frase = "Essa frase é das tops.";

console.log(frase);
console.log(frase.length);
console.log(frase.toUpperCase());


//======================================================================//
//Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

const aquiNull = null;
let aquiUndefined;

console.log("\n",aquiNull);
console.log(aquiUndefined);

//======================================================================//
//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

let idade = 20;
const nome = "Kauã";
let estudando = true;

console.log(`\nMeu nome é ${nome} e tenho ${idade} anos, estou estudando? RESPOSTA:${estudando}`);

//======================================================================//
//Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

const dedos = Number.parseInt("5");
const carros = toString(1);

console.log(typeof dedos);
console.log(typeof carros);

//======================================================================//
//Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

const fraseManipulada = "Eu tenho essa frase que sera exibida de VÁRIAS formas!";

console.log(fraseManipulada.toLowerCase());
console.log(fraseManipulada.toUpperCase());