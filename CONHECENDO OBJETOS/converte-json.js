const estudante = require("./estudante.json")

const stringEstuande = JSON.stringify(estudante)

console.log(stringEstuande);
console.log(typeof stringEstuande);

const objEstudante = JSON.parse(stringEstuande);

console.log(objEstudante);
