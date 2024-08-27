//======================================================================//
// Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const meuArray = ["a", "b", "c", "d", "e"];

meuArray.forEach((elemento, indice) => {
    console.log(`Índice: ${indice}, Valor: ${elemento}`);
});

//======================================================================//
// Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcaoCallback) {
    return array.map(funcaoCallback);
}

function dobraNumero(num) {
    return num * 2;
}

const listaNumeros = [1, 2, 3];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero);
console.log(listaNumerosDobrados);

//======================================================================//
// Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

//======================================================================//
const nomesTurmaA = ["João Silva", "Maria Santos", "Pedro Almeida"];

const nomesTurmaB = ["Carlos Oliveira", "Ana Souza", "Lucas Fernandes"];

const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
const alunoProcurado = todosAlunos.find((nome) => nome === "Ana Souza");

if (alunoProcurado) {
    console.log("Aluno encontrado:", alunoProcurado);
} else {
    console.log("Aluno não encontrado.");
}

//======================================================================//
const numeros = [6, 9, 12, 15, 18, 21];

console.log("Elementos do array multiplicados por 3:");

numeros.forEach((numero) => {
  const resultado = numero * 3;
    console.log(resultado);
});

const indiceDoNumero18 = numeros.findIndex((numero) => numero === 18);

if (indiceDoNumero18 !== -1) {
    console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
} else {
    console.log("O número 18 não está presente no array.");
}