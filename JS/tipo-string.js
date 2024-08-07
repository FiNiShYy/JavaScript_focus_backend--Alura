const estudante = "Mariana";
const docente = 'Ana';
const cumprimento = "Nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "Nosso lema é estudar bastante!"`;

console.log(cumprimento);
console.log(citacao);

console.log('A estudante chama ' + estudante);

// template string

console.log (`A estudante se chama ${estudante}`);

//=================//

const senha = 'SenhaSegura123' + estudante.toUpperCase();
if (senha === 'SenhaSegura123MARIANA') {
    console.log("true");
} else {
    console.log("false");
}