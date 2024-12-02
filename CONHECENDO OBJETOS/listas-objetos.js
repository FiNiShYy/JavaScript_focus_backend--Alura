const estudante = {
    nome: "Kauã Gabriel",
    idade: 21,
    cpf: "12312312312",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["5544999999996" , "5544999999997"],
    endereco: [{
        rua: "Av Brasil",
        numero: "45A",
        complemento: "APTO 101",
    }]
}

estudante.endereco.push({
    rua: "Dona Clotilde",
    numero: "71",
    complemento: null,
})


// console.log(estudante.endereco);
// console.log(estudante.endereco[0]);

const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)

console.log(listaEnderecosComComplemento);