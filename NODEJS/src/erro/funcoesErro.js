function trataErros(err) {
    if (err.code === 'ENOENT') {
        throw new Error('Arquivo não encontrado');
    } else {
        return "Erro ao ler arquivo!"
    }
}

module.exports = trataErros;
