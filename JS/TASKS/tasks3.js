//======================================================================//
//Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let valorSaldo = 5000;
let valorDeposito = 1000;
let valorSaque = 500;

let operacao = valorSaldo + valorDeposito;
console.log(`Saldo após depósito é de ${operacao}`);

operacao = operacao - valorSaque;
console.log(`Saldo após saque é de ${operacao}`);

//======================================================================//
//Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

let numero = 20;

(numero % 2 === 0) ? console.log(`O número ${numero} é PAR!`) : console.log(`O número ${numero} é IMPAR!`)

// if (numero % 2 === 0) {
//     console.log(`O número ${numero} é PAR!`);
// } else {
//     console.log(`O número ${numero} é IMPAR!`)
// }

//======================================================================//
//Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

let isLogged = false;
let isAdmin = false; 

(isLogged === true && isAdmin === true) ? console.log("Pode acessar!") : console.log("Não pode acessar!");

//======================================================================//
//Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

let thisIsTrue = true;
let thistIsFalse = false;

(thisIsTrue === true || thistIsFalse === true) ? console.log("Pelo menos uma é true blz!") : console.log("Não tem nenhuma true blz!");

//======================================================================//
//Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

let idadeUsuario = 20;
let idadeMinima = 21;

(idadeUsuario >= idadeMinima) ? console.log("Usuário tem idade minima para efetuar compra!") : console.log("Usuário NÃO tem idade minima para efetuar compra!");