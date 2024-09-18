//======================================================================//
// 1 - Crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:
// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.
// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

const livro = {
    titulo: "A revolução dos bichos",
    autor: "George Orwell",
    anoPublicacao: 1945,
    genero: "Alegoria",
}

console.log(`Detalhes do livro: Seu titulo é "${livro.titulo}" e foi escrito por ${livro.autor}, publicado no de ${livro.anoPublicacao} seu gênero é ${livro.genero}`);

//======================================================================//
// 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
// Adicione a propriedade idadePublicacao diretamente ao objeto livros, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro2, incluindo a informação da idade de publicação.
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

const anoAtual = new Date().getFullYear()

const livro2 = {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949,
    genero: "Distopia",
}

livro2.idadePublicacao = anoAtual - livro2.anoPublicacao;

livro2.mostrarDetalhes = "Detalhes do Livro:\n" +
                        "Título: " + livro2.titulo + "\n" +
                        "Autor: " + livro2.autor + "\n" +
                        "Ano de Publicação: " + livro2.anoPublicacao + "\n" +
                        "Gênero: " + livro2.genero + "\n" +
                        "Idade de Publicação: " + livro2.idadePublicacao + " anos";

console.log(livro2.mostrarDetalhes);
//======================================================================//
// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

const livro3 = {
    titulo: "Método Sigma: Desenvolvimento Pessoal",
    autor: "Gabriel Da Costa",
    anoPublicacao: 2022,
    genero: "SIGMA!",
    idadePublicacao: anoAtual - 2022,
}

console.log(`O livro ${livro3.titulo}, foi lançado para ajudar os homens sigmas do mundo à cerca de ${livro3.idadePublicacao} anos!`);

//======================================================================//
// 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
// No final do arquivo livro.js, adicione uma avaliação ao objeto.
// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

const livro4 = {
    titulo: "Método Sigma: Desenvolvimento Pessoal",
    autor: "Gabriel Da Costa",
    anoPublicacao: 2022,
    genero: "SIGMA!",
    idadePublicacao: anoAtual - 2022,
    avaliacao: null
}

const novaAvaliacao = 99;
if (livro4.avaliacao === null) {
    livro4.avaliacao = novaAvaliacao;
} else {
    console.log("Este livro ja possui uma avaliação!");
}

console.log(livro4);

//======================================================================//
// 5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".

const livro5 = {
    titulo: "Como enfrentar o ódio",
    autor: "Felipe Neto",
    anoPublicacao: 2024,
    genero: "felipeNeto",
    idadePublicacao: anoAtual - 2024
}

console.log(livro5);

livro5.genero = "Aventura"

console.log(livro5);

//======================================================================//
// 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

const livro6 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954
};

delete livro6.avaliacao;

console.log(`Detalhes do Livro:
    Título: ${livro6.titulo}
    Autor: ${livro6.autor}
    Ano de Publicação: ${livro6.anoPublicacao}
    Gênero: ${livro6.genero}
    Idade de Publicação: ${livro6.idadePublicacao} anos`)