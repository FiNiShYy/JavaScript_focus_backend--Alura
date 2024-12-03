const estudante = {
    nome: "Kauã Gabriel",
    idade: 21,
    cpf: "12312312312",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["5544999999996" , "5544999999997"],
    // enderecos: [{
    //     rua: "Av Brasil",
    //     numero: "45A",
    //     complemento: "APTO 101",
    // },
    // {
    //     rua: "Av Argentina",
    //     numero: "76B",
    //     complemento: null,
    // }]
}

const chavesObjeto = Object.keys(estudante)
console.log(chavesObjeto);

if (!chavesObjeto.includes("enderecos")) {
    console.error("É necessário ter um endereço cadastrado!")
}