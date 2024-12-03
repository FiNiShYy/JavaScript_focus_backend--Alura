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

for (let chave in estudante) {
    const tipo = typeof estudante[chave]
    if (tipo !== "object" && !tipo !== "function") {
    const texto = `A chave ${chave}, tem o valor ${estudante[chave]}!`
    console.log(texto);
    }
}

