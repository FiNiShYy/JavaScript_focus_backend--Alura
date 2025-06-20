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

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "2025-01-01",
    role: "admin",
    ativo: true,
    criarCurso: function() {
        console.log("Curso criado!");
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
