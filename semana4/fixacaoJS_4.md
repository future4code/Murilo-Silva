```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let novoArray = []
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] === numeroEscolhido) {
            novoArray.push(arrayDeNumeros[i])
        }
    }

    const vezesNumeroAparece = novoArray.length

    if (novoArray.includes(numeroEscolhido)){
        return (`O número ${numeroEscolhido} aparece ${vezesNumeroAparece}x`)
    } else {
        return "Número não encontrado"
    }
    
}
```
