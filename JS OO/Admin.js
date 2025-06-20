import User from './User.js';

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `Curso de ${nomeCurso} criado com ${qtdVagas} vagas`
    }
}

const novoAdmin = new Admin("Mariana", "m@m.com", "2024-01-01");

console.log("🚀 - novoAdmin:", novoAdmin)
console.log("🚀 - novoAdmin:", novoAdmin.criarCurso("Engenharia de Software", 30))