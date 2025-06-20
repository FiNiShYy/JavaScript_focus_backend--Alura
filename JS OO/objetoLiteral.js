const user = {
    nome: "Kauã",
    email: "k@k.com",
    nascimento: "2025-01-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

// user.exibirInfos()

const exibir = user.exibirInfos
exibir()