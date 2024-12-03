const estudante = {
    nome: "Kauã Gabriel",
    idade: 21,
    cpf: "12312312312",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["5544999999996" , "5544999999997"],
    enderecos: [{
        rua: "Av Brasil",
        numero: "45A",
        complemento: "APTO 101",
    },
    {
        rua: "Av Argentina",
        numero: "76B",
        complemento: null,
    }]
}

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

// exibirTelefones(estudante.telefones[0], estudante.telefones[1])
exibirTelefones(...estudante.telefones)

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log("TCL: dadosEnvio", dadosEnvio)
