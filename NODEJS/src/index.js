const fs = require('fs');
import trataErros from './funcoesErro';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]


fs.readFile(link, 'utf8', (err, texto) => {
    try {
    if (err) throw err;
        contaPalavras(texto)
    } catch(err) {
        trataErros(err)
    }
})

function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return []
        return verificaPalavrasDuplicadas(paragrafo)
    })
    console.log(contagem);
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n')
}

function limpaPalavras (palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

function verificaPalavrasDuplicadas (texto) {
    const listaPalavras = texto.split(' ')
    const resultado = {}
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3 ) {
            const palavraLimpa = limpaPalavras(palavra)
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1 
        }
    });
    return resultado
    
}
