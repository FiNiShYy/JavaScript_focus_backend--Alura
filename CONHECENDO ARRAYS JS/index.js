const arrayNums = [1, 2, 3, 4];

const arrayNumsMultiplicados = arrayNums.map((Nums) => Nums = Nums * 10);

console.log(arrayNumsMultiplicados);

// function multiplicaPorDez(num) {
//     return num * 10
//    }

//    const arraySomada = arrayNums.map(multiplicaPorDez)

// console.log(arraySomada)

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acum, atual) => atual + acum, 0)

console.log(soma) //170