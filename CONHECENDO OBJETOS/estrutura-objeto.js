const estudante = {
    nome: "Kauã Gabriel",
    idade: 20,
    cpf: "12312312312",
    turma: "JavaScript"
}

console.log(estudante.nome);
console.log(`O nome do estudante é ${estudante.nome}`);
console.log(`Os três primeiros números do CPF são ${estudante.cpf.substring(0, 3)}`);