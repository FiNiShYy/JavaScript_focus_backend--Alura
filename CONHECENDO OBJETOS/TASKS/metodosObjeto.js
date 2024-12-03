carro = {
    marca: "Honda",
    modelo: "Civic SI",
    ano: 2007,
    cor: "Amarelo",
    ligado: true,
    
    ligar: function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log('O carro está ligado.');
        } else {
            console.log('O carro já está ligado.');
        }
    },

    desligar: function () {
        if (this.ligado) {
            this.ligado = false;
            console.log('O carro está desligado.');
        } else {
            console.log('O carro já está desligado.');
        }
    },
    
    obterDetalhes: function () {
        const estado = this.ligado ? 'ligado' : 'desligado';
        return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
    }
}

carro.ligar(); 
carro.desligar();
carro.desligar();
carro.ligar();
console.log(carro.obterDetalhes());

carro.placa = "AAA-0A00"