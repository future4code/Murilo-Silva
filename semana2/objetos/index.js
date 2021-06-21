// ---------------------- EXERCICIOS ------------------------------------

// ---------------------INTERPRETAÇÃO -----------------------------------

// 1)-

// Irá mostrar o primeiro e o ultimo atores do array de elenco e que vai
// passar na Globo. Sendo transmiçõesHoje um onjeto dentro do objeto




// 2)-


// a)- O que vai ser impresso no console?

// Vai ser impresso as informações de cada animal.Trocando o nome do
// cachorro pra nomear o gato de Juba e trocando as letras do nome do gato
// pra determinar o nome da tartaruga de Jubo


// b)- O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Copiar tudo que tem no objeto sem alterár o original.



// 3)-


// a) O que vai ser impresso no console?

// Vai apenas mostrar a informação de dentro do objeto se ele é backender e
// a altura aparece como indefinido "undefined"




// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// Sim eu sei, o console.log só abriu a função abrindo o objeto e acessando
// a "gaveta" que diz se é backender ou não, e não tinha nenhum dado de 
// altura.



// ------------------- ESCRITA DE CÓDIGO ----------------------------------


// 1)-


const identity = {
    name: "Murilo",
    nickName: ["R2d2", "Wally", "robozinho"]
}

const alert = (funcao) => {
    console.log(`Eu sou ${funcao.name}, mas pode me chamar de: ${funcao.nickName[0]}, ${funcao.nickName[1]}, ou ${funcao.nickName[2]}`)
}


alert(identity)

const newIdentity = {...identity, nickName: ["Batman", "fantasma", "muriliru"]}


alert(newIdentity)



// 2)-


const objeto1 = {
    nome: "João",
    idade: 22,
    profissao: "Advogado"
}


const objeto2 = {
    nome: "Nicolas",
    idade: 21,
    profissao: "Segurança"
}

const amigos = (objeto1, objeto2) => {
    const 
}


























