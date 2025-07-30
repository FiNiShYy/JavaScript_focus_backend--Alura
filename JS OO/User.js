export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome) {
        if (novoNome === "") {
            throw new Error("Formato do nome não é valido!")
        }
        return this.#nome = novoNome;
    }

    set email(email) {
        return this.#email = email;
    }

    set nascimento(nascimento) {
        return this.#nascimento = nascimento;
    }

    set role(role) {
        return this.#role = role;
    }

    set ativo(ativo) {
        return this.#ativo = ativo;
    }
    // exibirInfos() {
    //     return `${this.nome}, ${this.email}`
    // }

    exibirInfos() {
        if (this.role === "estudante") {
            return `Dados estudante - ${this.nome}`
        }
        if (this.role === "admin") {
            return `Dados admin - ${this.nome}, ${this.role}`
        }
        if (this.role === "docente") {
            return `Dados docente - ${this.nome}, ${this.email}`
        }
    }

    static exibirInfosGenericas(nome, email) {
        return `Nome: ${nome}, Email: ${email}`
    }
}

// const novoUser = new User("Kauã", "j@j.com", "2024-01-01")

// console.log(novoUser);
// console.log(novoUser.exibirInfos())

