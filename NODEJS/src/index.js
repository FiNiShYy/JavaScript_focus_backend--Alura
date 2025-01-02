const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]


fs.readFile(link, 'utf8', (err, texto) => {
console.log(texto)

})
