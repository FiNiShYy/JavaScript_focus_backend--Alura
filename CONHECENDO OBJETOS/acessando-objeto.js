const estudante = {
    nome: "Kauã Gabriel",
    idade: 20,
    cpf: "12312312312",
    turma: "JavaScript"
}

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(estudante.pet);
console.log(estudante["pet"]);


console.log(exibeInfoEstudante(estudante, "nome"));
console.log(exibeInfoEstudante(estudante, "cpf"));