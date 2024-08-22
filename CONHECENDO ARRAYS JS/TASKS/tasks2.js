//======================================================================//
// 1 - Crie uma função que receba dois arrays e os concatene em um único array.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2);

console.log(array3);

//======================================================================//
// 2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(3, 8);

console.log(parteNumeros);

//======================================================================//
// 3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'Kiwi', 'Pessego');

console.log(frutas);


//======================================================================//
// 4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = [
    'Filé Mignon ao Molho Madeira',
    'Frango Grelhado com Legumes',
    'Peixe ao Molho de Alcaparras',
    'Risoto de Cogumelos',
    'Lasagna Bolonhesa',
    'Spaghetti à Carbonara'
];

const menuDeSobremesas = [
    'Cheesecake de Frutas Vermelhas',
    'Mousse de Chocolate',
    'Pudim de Leite Condensado',
    'Torta de Limão',
    'Sorvete de Baunilha com Calda de Caramelo',
    'Brownie com Sorvete'
];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto);

//======================================================================//
// 5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
// Função para gerar uma matriz 3x3 com valores incrementais