function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

function Admin(role) {
    User.call(this, 'Kauã', 'k@k.com')
    this.role = role || 'estudante'
}

const novoUser = new User("Kauã", "k@k.com");

Admin.prototype = Object.create(User.prototype)
const juliana = new Admin('admin')

console.log(juliana.role)
console.log(novoUser.exibirInfos());