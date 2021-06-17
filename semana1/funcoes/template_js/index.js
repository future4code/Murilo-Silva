//--------------------EXERCÍCIOS DE LEITURA DE CÓDIGO: -----------------------


//   EXERCICIO 1 -------------------------------------------


// A)- // atribui valor de (2) a minhaFuncao, o renurn multiplica por 5, dando 10
//     // atribui valor de (10) a minhaFuncao, o renurn multiplica por 5, dando 50
// B)- // Dá erro, até porque o console.logserve para imprimir e verificarmos se o codigo está indo.


//EXERCICIO 2 -----------------------------------------------


// A)-  A função está determinando um texto para apresentar no return dentro dela, que vai deixar todas as letras minúsculas e
//responder com um booleano se inclui ou não "cenoura"

// B)-  i.   Eu gosto de cenoura       -TRUE
    //  ii.  CENOURA é bom pra vista   -TRUE
    //  iii. Cenouras crescem na terra -TRUE


//--------------------- EXERCÍCIOS DE ESCRITA DE CÓDIGO: -----------------------


//-------------------------PRIMEIRO-----------------------------
// A)-

// function dadosPessoa(){
//     console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
// }
// dadosPessoa()

// B)- 

const nomeUsuario = prompt("Nome")
const idadeUsuario = Number(prompt("Idade"))
const cidadeUsuario = prompt("Cidade")
const profissaoUsuario = prompt("Profissão")

function dadosPessoais(nome, idade, cidade, profissao){
    const texto = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e minha profissão é ${profissao}.`
    return texto
}

const resultado = dadosPessoais(nomeUsuario, idadeUsuario, cidadeUsuario, profissaoUsuario)
console.log(resultado) 











