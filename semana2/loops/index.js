//==================== EXERCICIOS INTERPRETAÇÃO =========================

//1)- está acrecentando á variavel "i" de 0 a 4, completand cinco etapas
// depois em baixo estava acrescentando de dois em dois. Será impresso 10


//2)- 

//a) O que vai ser impresso no console?
// Irá mstrar os numeros do array mas apenas s que estão acima de 18. os maiores números.

//B)- É o suficiente, uma alteração que pode ser feita é apagar a condição, deixar o console.log e será impresso todos os números.

//3)- Seriam quatri linhas com acrescimo de um asterisco por linha.


//=================== EXERCICIOS DE ESCRITA DE CÓDIGO ===================

// //1)-
//  
//  const arrayDosBicho = []
// let bichinhosDoUsuario = Number(prompt("Quantos animais você tem em casa?"))
// if(bichinhosDoUsuario === 0){
//     console.log("Que Pena! Mas você pode adotar um :D")
// } else {
//     for (let i = 0; i < bichinhosDoUsuario; i++) {
//         const nomesBichos = prompt("Digite os nomes")
//         arrayDosBicho.push(nomesBichos)
//     }
// }
//     console.log(arrayDosBicho) 

// 2)-

//A)-

// const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const imprimeTodos = () => {
// for (let numero1 of arrayOriginal) {
//    {
// 		console.log(numero1)
// 	}
// }
// }
// imprimeTodos()


// //B)-

// const funcaoDeDivisao = () => {
//     for (let numero2 of arrayOriginal) {
//         {
//              console.log(numero2 / 10)
//          }
//      }
// }
// funcaoDeDivisao()

// //C)- 

// let novoArray = []
// for(let elemento of arrayOriginal) {
//     if(elemento % 2 === 0) {
//         novoArray.push(elemento)
//     }
// }

// console.log(novoArray)

// D)-

const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const retornaStringNaArray = (array) => {
    const newArray = []
    for(const elemento of array) {
        newArray.push(`O elemento do index ${array.indexOf(elemento)} é ${elemento}`)
        return newArray
    }
}

console.log(retornaStringNaArray(arrayOriginal))















