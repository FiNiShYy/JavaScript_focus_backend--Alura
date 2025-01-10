function trataErros(erro) {
    console.log("🚀 - trataErros - erro:", erro.code)
    if (erro.code === 'ENOENT') {
        throw new Error('Arquivo não encontrado');
    } else {
        return 'Erro na aplicação';
    }
}

export default trataErros;