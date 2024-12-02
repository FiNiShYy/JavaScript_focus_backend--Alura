const estudante = {
    nome: "Kauã Gabriel",
    idade: 21,
    cpf: "12312312312",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["5544999999996" , "5544999999997"],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante.estaAprovado(7) ? "Está aprovado!" : "Está reprovado!");

