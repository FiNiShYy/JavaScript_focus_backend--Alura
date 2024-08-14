//Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

const variavelString = "Kauã";
const variavelNumber = 20;
const variavelBoolean = true;

console.log(
            "TIPO VARIAVEL KAUÃ:", typeof variavelString,
            "\nTIPO VARIAVEL 20:", typeof variavelNumber,
            "\nTIPO VARIAVEL TRUE:", typeof variavelBoolean
)

//======================================================================//
//Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

const primeiroNome = "Kauã";
const ultimoNome = "Miguel";

const primeiroEultimoNome = primeiroNome + " " + ultimoNome;
const primeiroEultimoNomeTemplate = `${primeiroNome} ${ultimoNome}`;

console.log(
            "\nPrimeiro nome:", primeiroNome,
            "\nUltimo nome:", ultimoNome,
            "\nPrimeiro e ultimo nome:", primeiroEultimoNome,
            "\nPrimeiro e ultimo nome com template:", primeiroEultimoNomeTemplate      
)

//======================================================================//
//Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

const numero = 20;
const string = "Kauã";

const combinação = `Meu nome é ${string} e tenho ${numero} anos!`;

console.log(
    "\nIdade:", numero,
    "\nNome:", string,
    "\nResultado:", combinação
)

//======================================================================//
//Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

var variavelTask4 = "Nice one! =)";
console.log("\nThis is a", variavelTask4);

var variavelTask4 = "Bad one! =(";
console.log("This is a", variavelTask4)

//======================================================================//
//Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

if ( 1 > 0) {
    var variavelQualquer = "Kauã";
    console.log(`\nMeu nome é ${variavelQualquer}`);
};

var variavelQualquer = "Mariana";
console.log(`Agora meu nome é ${variavelQualquer}`)

//======================================================================//
//Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

let estaChovendo = true;

if (estaChovendo === true) {
    console.log("\nEstá chovendo, leve um guarda chuva!");
} else {
    console.log("\nNão está chovendo, fica de boa!");
}