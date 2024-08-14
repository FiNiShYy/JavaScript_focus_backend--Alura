//======================================================================//
// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

const arrayEsparso = [ , , , , , , , ];

arrayEsparso[1] = 2;
arrayEsparso[3] = 4;
arrayEsparso[7] = 8;

console.log(arrayEsparso);
console.log(arrayEsparso.length);
//======================================================================//
// Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

const arrayCinco = [1, 2, 3, 4, 5];

console.log(`Antes de alterar o array:`,arrayCinco); 

arrayCinco[0] = "NovoValor";

console.log(`Depois de alterar o array:`, arrayCinco); 

//======================================================================//
// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

const meuArray = [];

meuArray.push(20);
meuArray.push(35);
meuArray.push(50);

console.log(`Números adicionados:`, meuArray);

meuArray[0] = 40;

console.log(`Primeiro valor alterado para o número do dobro:`, meuArray);

//======================================================================//
// Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

const arrayVazio = [];

arrayVazio.push(1);
arrayVazio.push(2);
arrayVazio.push(3);

console.log(`Números do array vazio:`, arrayVazio);

//======================================================================//
// Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

const clinica = [];

clinica.push("Gutta");
clinica.push("Polaco");
clinica.push("Flor");

console.log(`Os três primeiros pacientes são: ${clinica[0]}, ${clinica[1]} e ${clinica[2]}!`, clinica);

clinica.pop();
clinica.pop();
clinica.pop();

console.log(`A clinica está vazia:`, clinica);