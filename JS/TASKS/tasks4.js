//======================================================================//
// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

function saudacaoComNome(nome) {
    return `Olá ${nome}, tudo bem com você?`
}

console.log(saudacaoComNome("Kauã"));

//======================================================================//
// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

function verificaIdade (idade) {
    if (idade >= 18) {
        return `\nSua idade é ${idade}, portanto você é maior de idade!`
    } else {
        return `\nSua idade é ${idade}, portanto você é menor de idade!`
    }
}

console.log(verificaIdade(17));
console.log(verificaIdade(20));

//======================================================================//
// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

// function ePalindromo(palavra) {
//     if (palavra === palavra.reverse) {
//         return "true"
//     } else {
//         return "false"
//     }
// }

// console.log(ePalindromo("arara"));
// console.log(ePalindromo("tome"));

//======================================================================//
// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

function qualMaior(a, b, c) {
    if (a > b && a >c) {
        return `\nOs números inserídos foram: ${a}, ${b} e ${c}, mas o maior é ${a}!`
    } else if (b > c && b > a) {
        return `\nOs números inserídos foram: ${a}, ${b} e ${c}, mas o maior é ${b}!`
    } else {
        return `\nOs números inserídos foram: ${a}, ${b} e ${c}, mas o maior é ${c}!`
    }
}

console.log(qualMaior(3, 2, 1));
console.log(qualMaior(3, 4, 2));
console.log(qualMaior(3, 4, 5));

//======================================================================//
// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calculaPotencia = (base, expoente) => {
    return (
        base ** expoente
    )
} 

console.log(calculaPotencia(2, 2));
console.log(calculaPotencia(2, 3));
console.log(calculaPotencia(3, 2));
