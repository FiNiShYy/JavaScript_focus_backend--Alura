import fs from 'fs';
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
    })

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; 
const endereco = caminhoArquivo[3]; 

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, endereco)
    } catch(erro) {
        trataErros(erro);
    }
})

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