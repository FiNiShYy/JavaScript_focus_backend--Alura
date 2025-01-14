function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

function montaSaidaArquivo(listaPalavras) {
    let textoFinal = ""
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo)
        if (duplicadas.length > 0) {
            textoFinal += `Palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas.join(", ")}\n`
        }
    })
    return textoFinal
}

export { montaSaidaArquivo }