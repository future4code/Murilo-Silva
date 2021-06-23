//1)-

//a)-a) Explique o que o código faz. Qual o teste que ele realiza? 
// Testa se o número é par ou não.

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Se for par

//c) Para que tipos de números a mensagem é "Não passou no teste"?
// Se não for par


//2)-
// a) Para que serve o código acima?
// Para mostrar o preço da fruta selecionada.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? 
// Será 2,25


// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// O preço que seria considerado seria o de baixo, R$ 5 e não R$ 5,5

// 3)-

// a) O que a primeira linha está fazendo?
// Pedindo para inserir um número.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Que passou no teste.No caso do -10 não aparece nenhuma mensagem

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Aparece um erro da mensagem secreta, pois está fora do alcance daquele console.log



//------------------------EXERCICIOS ESCRITA-----------------------------

//1)-

// const maiorIdade = Number(prompt("Digite sua idade:"))
// if (maiorIdade >= 18) {
//     console.log("Bora apostar um racha!")
// } else {
//     console.log("Boora dá o grau na bicicleta msm!")
// }

//2)-


// const periodo = (horaDeEstudo) => {
//     if (verificaTurno === "M" ){
//         console.log("Bom dia filhão!")
//     }
//     if (verificaTurno === "V" ){
//         console.log("Boa tarde guerrero!")
//     } 
//     if (verificaTurno === "N" ){
//         console.log("Boa noite sonhador")
//     }
// }

// const verificaTurno = prompt("Digite com M (de Matutino), V (de Vespertino), ou N (de Noturno) para seu período de estudo")

// periodo(verificaTurno)

//3)-

// const periodo = (horario) => {
//     switch(horario.toUpperCase()){
//         case "M":
//             console.log("Bom dia, força filhão!")
//             break
//             case "V":
//             console.log("Boa tarde princesa!")
//             break
//             case "N":
//             console.log("Boa Noite nobre guerreiro!")
//             break
//             default:
//                 console.log("Cê tá maio loucçao q eu, sinto muito!")
//     }
// }

// const turno = prompt("Digite M, V, ou N. Correspondente ao seu período de estudo")
// periodo(turno)

//4)-

// const assistir = (genero, preco) => {
//     if (precoIngresso < 15 && generoFilme.toUpperCase() === "SIM") {
//             console.log("Bom filme!")
//         } else {
//             console.log("Tenta outro :(")
//         }
// }
// const precoIngresso = Number(prompt("Digite o Preço do Inggresso:"))
// const generoFilme = prompt("O Filme é de Fantasia? Sim ou Não?")

// assistir(generoFilme, precoIngresso)



//--------------------------- DESAFIO -----------------------------------

//1)-

// const assistir = (genero, preco, lanche) => {
//     if (precoIngresso < 15 && generoFilme.toUpperCase() === "SIM") {
//             console.log("Bom filme!", `Aproveite o seu ${lanchinho}`)
//         } else {
//             console.log("Tenta outro :(")
//         }
// }

// const precoIngresso = Number(prompt("Digite o Preço do Ingresso:"))
// const generoFilme = prompt("O Filme é de Fantasia? Sim ou Não?")
// const lanchinho = prompt("Digite seu lanche:")

// assistir(generoFilme, precoIngresso, lanchinho)

//2)-

const compraIngressos = (nome, tipo, etapa, categoria, quantidade) => {
    //     switch(horario.toUpperCase()){
    //         case "M":
    //             console.log("Bom dia, força filhão!")
    //             break
    //             case "V":
    //             console.log("Boa tarde princesa!")
    //             break
    //             case "N":
    //             console.log("Boa Noite nobre guerreiro!")
    //             break
    //             default:
    //                 console.log("Cê tá maio loucçao q eu, sinto muito!")
    //     }
    // }


const nomeTorcedor = prompt("Digite seu nome completo:")
const tipoDoJogo = prompt("Digite o tipo do jogo como IN (caso seja iternacional) ou DO (caso seja Doméstico):")
const etapaDoJogo = prompt("Digite a etapa do jogo como SF (caso seja semi-final), DT (caso seja decisão de terceiro lugar), ou FI (caso seja final):")
const categoria = Number(prompt("Digite se é de 1, 2, 3, ou 4 categoria:")) 
const quantidadeIngressos = Number(prompt("Digite a quantidade de ingressos:"))























