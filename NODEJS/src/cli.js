import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        contaPalavras(texto);
        if (erro) throw erro
    } catch(erro) {
        trataErros(erro);
    }
})

function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`
    try {
        const textoPalavras = JSON.stringify(listaPalavras);
    } catch(erro) {

    }
}