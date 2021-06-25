/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    

// if(confirm ("Quer iniciar uma nova partida?")) {
//    //Fazer se for true
// } else {
//    //      console.log("O jogo acabou!")      O que fazer se for false
// }


console.log("Boas vindas ao jogo de blackjack")

let partida = confirm("Iniciar uma nova partida?")

if (partida){

const usuarioCarta1 = comprarCarta();
const usuarioCarta2 = comprarCarta();

const maquinaCarta1 = comprarCarta();
const maquinaCarta2 = comprarCarta();

const valorCartasUsuario = usuarioCarta1.valor + usuarioCarta2.valor
const valorCartasMaquina = maquinaCarta1.valor + maquinaCarta2.valor


console.log(`Usuário - cartas: ${usuarioCarta1.texto} e ${usuarioCarta2.texto}  - pontuação ${valorCartasUsuario}`)

console.log(`Máquina - cartas: ${maquinaCarta1.texto} e ${maquinaCarta2.texto} - pontuação ${valorCartasMaquina}`)


if(valorCartasUsuario > valorCartasMaquina) {
   console.log("Parabéns! Você ganhou!")
} else if (valorCartasMaquina > valorCartasUsuario) {
   console.log("A Máquina ganhou!")
   } else if (valorCartasUsuario === valorCartasMaquina) {
      console.log("Empate!")
   }

} else {
   console.log("Ok, até a próxima")
}














