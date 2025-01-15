import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from "commander"

const program = new Command()

program
.version("0.0.1")
.option("-t, --texto <string>", "Caminho do texto a ser processado")
.option("-d, --destino <string>", "Caminho da pasta onde salvar arquivo de resumos e de resultados")
.action((options) => {
    const {texto, destino} = options
    
    if (!texto || !destino ) {
        console.error("Erro, favor inserir caminho de origem e destino!")
        program.help()
        return
    }
    
    const caminhoTexto = path.resolve(texto)
    const caminhoDestino = path.resolve(destino)

    try {
        processsaArquivo(caminhoTexto, caminhoDestino)
    } catch(erro) {
        console.log("Ocorreu um erro no processamento!", erro);
    }
})

program.parse()

function processsaArquivo(texto, destino) {
    
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino)
            console.log("Texto processado com sucesso!");
        } catch(erro) {
            trataErros(erro);
        }
    })
    
}

async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log("Arquivo criado!");
    } catch(erro) {
        throw trataErros(erro);
    }
}