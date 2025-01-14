function trataErros(erro) {
    if (erro.code === 'ENOENT') {
        throw new Error('Caminho não encontrado');
    } else {
        return 'Erro na aplicação';
    }
}

export default trataErros;