//Questão 01:

pessoa = {
    nome: "Adriano Roberto",
    idade: 45,
    solteiro: false,
    hobbies: ["Pesca", " Vendas", " Fotos"]
}

function mostrarInfoPessoa(pessoa) {
    console.log("Informações e tipos de informações da pessoa:");
    console.log(`Seu nome é ${pessoa.nome} (Tipo: ${typeof(pessoa.nome)})`);
    console.log(`Sua idade é ${pessoa.idade} (Tipo: ${typeof(pessoa.idade)})`);
    console.log(`Ele está solteiro: ${pessoa.solteiro ? "Sim, está solteiro!" : "Não, está comprometido!"} (Tipo: ${typeof(pessoa.solteiro)})`);
    console.log(`Seus hobbies são: ${pessoa.hobbies} (Tipo: ${typeof(pessoa.hobbies)})`);
}

mostrarInfoPessoa(pessoa);

// ===================================================================================================
//Questão 02:

pessoa.endereco = {
    rua: "Rua Magdalena Frigo Gil",
    cidade: "Iguatemi",
    estado: "Paraná"
}

function mostrarInfoPessoaAtualizada(pessoa) {
    console.log("Informações e tipos de informações da pessoa:");
    console.log(`Seu nome é ${pessoa.nome} (Tipo: ${typeof(pessoa.nome)})`);
    console.log(`Sua idade é ${pessoa.idade} (Tipo: ${typeof(pessoa.idade)})`);
    console.log(`Ele está solteiro: ${pessoa.solteiro ? "Sim, está solteiro!" : "Não, está comprometido!"} (Tipo: ${typeof(pessoa.solteiro)})`);
    console.log(`Seus hobbies são: ${pessoa.hobbies} (Tipo: ${typeof(pessoa.hobbies)})`);
    console.log(`Seu endereço é: RUA: ${pessoa.endereco.rua}, CIDADE: ${pessoa.endereco.cidade} e ESTADO: ${pessoa.endereco.estado} (Tipo: ${typeof(pessoa.endereco)})`);
}

mostrarInfoPessoaAtualizada(pessoa)

// ===================================================================================================
//Questão 03:

listaPessoas = [
    {
        nome: "Mariana Orcezi",
        idade: 21,
        cidade: "Sarandi"
    },
    {
        nome: "Pedro Chicoski",
        idade: 22,
        cidade: "Maringá"
    },
    {
        nome: "Juão Pinheiro",
        idade: 20,
        cidade: "Curitiba"
    },
]

function mostrarListaPessoas(listaPessoas) {
    console.log(listaPessoas);
}

mostrarListaPessoas(listaPessoas)

listaPessoas.push({
    nome: "Bruno Luis",
    idade: 30,
    cidade: "Fortaleza"
})

mostrarListaPessoas(listaPessoas)

// ===================================================================================================
//Questão 04:

const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Divisão por zero não é permitida.";
        }
    },
    calcularMedia: function(numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;
    }
};

console.log("Soma: " + calculadora.soma(5, 3));
console.log("Subtração: " + calculadora.subtracao(8, 4));
console.log("Multiplicação: " + calculadora.multiplicacao(6, 2));
console.log("Divisão: " + calculadora.divisao(10, 2));
console.log("Divisão por zero: " + calculadora.divisao(8, 0));

const numerosParaMedia = [10, 8, 6, 9, 7];
console.log("Média: " + calculadora.calcularMedia(numerosParaMedia));