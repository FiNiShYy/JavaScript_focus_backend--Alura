// ===================================================================================================
//Questão 01:

pessoa = {
    nome: "Kauã Gabriel",
    idade: 21,
    notas: [8, 7, 9, 10],

    calcularMediaNotas: function () {
        const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / this.notas.length;
        return media.toFixed(2);
    },

    classificarDesempenho: function () {
        const media = this.calcularMediaNotas();
    
        if (media >= 9) {
            return 'Desempenho excelente';
        } else if (media >= 7.5 && media < 9) {
            return 'Bom desempenho';
        } else if (media >= 6 && media < 7.5) {
            return 'Desempenho regular';
        } else {
            return 'Desempenho insuficiente';
        }
    }
}

const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);

const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);

// ===================================================================================================
//Questão 02:

carro = {
    marca: "Honda",
    modelo: "Civic SI",
    ano: 2007,
    cor: "Amarelo"
}

for (let chave in carro) {
    console.log(`A propriedade ${chave}, tem o valor ${carro[chave]}`);
    
}

carro.bodykit = "Mugen RR"

for (let chave in carro) {
    console.log(`A propriedade ${chave}, tem o valor ${carro[chave]}`);
    
}

// ===================================================================================================
//Questão 03:


// ===================================================================================================
//Questão 04:
