// ====================== EXERCICIOS DE LEITURA ===============================

//1)-

// O codigo irá imprimir três arrays com um produto da array original em cada array própria. contendo nome e apelido de uma instrutora, cada. E um array com os nomes e apelids das 3, além do número do indice de cada uma.

//2)-

// Vai ser impresso somente os nomes delas em uma array.

//3)-

// vai mostrar nome e apelido das duas primeiras, os dois produtos dentro da array, só não vai mostrar do produto que tem "Chijo"


//======================== EXERCICIOS DE ESCRITA ===========================

// //1)-

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const novoArrayNomesPets = pets.map((item, index, array) => {
//     return item.nome
//  })
 
//  console.log(novoArrayNomesPets)

 //b)- 

// const retornaSalsichas = (cachorro) => {
//     if(cachorro.raca === "Salsicha"){
//         return true
//     } else {
//         return false
//         }
//     }

// const racaSalsicha = pets.filter(retornaSalsichas)
// console.log(racaSalsicha)

//c)- Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// const retornaPoodle = pets.filter((cachorro) => {
//     return cachorro.raca === "Poodle"
//     }).map((eachPoodle) => {
//         return `Você ganhou um cupom de desconto de 10% para tosar o/a ${eachPoodle.nome}!`
//     })

// console.log(retornaPoodle)

// 2)-

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// A)-

// const nomesProdutos = produtos.map((item, index, array) => {
//     return item.nome

// })

// console.log(nomesProdutos)

//B)-







