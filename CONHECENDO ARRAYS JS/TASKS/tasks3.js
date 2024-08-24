//======================================================================//
// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

const elements = ['Fogo', 'Água', 'Terra', 'Ar', 'Mais algum?'];

for (const element of elements) {
    console.log(element);
}

//======================================================================//
// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const listinha = ['banana', 'gatinho', 'brócolis'];

function imprimeIndiceEElemento(array) {
for (let i = 0; i < array.length; i++) {
    console.log(`índice ${i}, elemento ${array[i]}`);
}
}

imprimeIndiceEElemento(listinha);

//======================================================================//
// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const listaNumeros = [10, 20, 30];

function soma(array) {
let total = 0
for (let i = 0; i < array.length; i++) {
    total += array[i];
}
return total;
}

console.log(soma(listaNumeros));

//======================================================================//
// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

const listaValores = [10, 20, -10, 50, 130, 5, 95];

function maiorEMenorValor(array) {
    let menorValor = 0;
    let maiorValor = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorValor) {
            maiorValor = array[i]
        }
        if (array[i] < menorValor) {
            menorValor = array[i]
        }
    }
return `O menor número é ${menorValor} e o maior número é ${maiorValor}`;
}

console.log(maiorEMenorValor(listaValores));

//======================================================================//
// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

function numerosPares(array) {
    for (let i = 0; i < array.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(numeros[i])
        }
    }   
}

numerosPares(numeros);

//======================================================================//
// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const numerosPresentes = [10, 8, 6, 9, 7, 5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numerosPresentes[i];
}

const media = soma / numerosPresentes.length;
console.log('Array:', numerosPresentes);
console.log('Média dos números:', media);