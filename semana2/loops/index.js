/*
==================================================================================================
=============================EXERCÍCIOS DE INTERPRETAÇÃO DE CODIGO==================================
====================================================================================================

1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

RPTA:
O que esta fazendo o codigo é mediante um for vai acumular a variavel "valor"
cada vez enquanto a variavel "i" seja menor que 5, o valor que vai imprimir
sera 10


2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

RPTA:
No console vai imprimir o número maior do array o número 30,
Pelo que eu pesquisei o for.. of...  executa um bloco de codigo
para cada ELEMENTO de um objeto iterável nesse caso eu usaria um FOR ou um WHILE


3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
RPTA:
No console vai imprimir 4 asteriscos (****) porque depois de eu 
fazer o seguimento encontre que a variável quantidadeAtual conta de um em um
até chegar a 4 e como dentro do while esta esse for o unico que faz é imprimir
uma quantidade de asteriscos na qual depende da condição do valor da variável
"quantidadeAtual".


==================================================================================================
================================EXERCÍCIOS DE ESCRITA DE CODIGO===================================
==================================================================================================

1.- 
const bichinhos = []
const quantidadeBichos = Number(prompt("Insira quantos bichimhos vc tem :D"))
//console.log("quantidadeBichos:",quantidadeBichos)
if(quantidadeBichos === 0){
    console.log("Que pena! Você pode adotar um pet!")
}else if(quantidadeBichos > 0){   
    let repeticao = 0
    while(repeticao < quantidadeBichos){
        let nomeBicho = prompt("Insira os nomes do seus bichos")
        bichinhos.push(nomeBicho)
        repeticao += 1
        //console.log("repeticao",repeticao)
    } 
}else{
    console.log("tente novamente")
}
console.log(bichinhos)


2.-

const arrayOriginal = []
const quantidade = Number(prompt("Insira quantos número vc que colocar no seu array"))

while (arrayOriginal.length < quantidade){
    let preencherArray = Number(prompt("Insira os numero para o array"))
    arrayOriginal.push(preencherArray)
}
console.log("arrayOriginal",arrayOriginal)

//Item A
console.log("Resposta item A")
for(i=0; i<arrayOriginal.length;i++){
     console.log(arrayOriginal[i])
}

//Item B
console.log("Resposta item B")
for(i=0; i<arrayOriginal.length;i++){
     console.log(arrayOriginal[i]/10)
}

//Item C
const arrayC = []
console.log("Resposta item C")
for(i=0; i<arrayOriginal.length;i++){     
     if(arrayOriginal[i]%2===0){
        arrayC.push(arrayOriginal[i])
     }
}
console.log(arrayC)

//Item D
const arrayD = []
console.log("Resposta item D")
while(arrayD.length<quantidade){
    for(i=0;i<arrayOriginal.length;i++){
       arrayD.push(`O elemento do índex ${arrayOriginal.indexOf(arrayOriginal[i]).toString()} é ${arrayOriginal[i]}`)
    }
    // console.log(arrayD.join())
    arrayD.forEach((elemnto)=>{
        console.log(elemnto)
    });
    
}

//Item E
console.log("Resposta item E")
let valorMaximo = arrayOriginal[0]
let valorMinimo = arrayOriginal[0]
console.log(valorMaximo)
console.log(valorMinimo)
for(i=0; i<arrayOriginal.length;i++){   
    if(arrayOriginal[i]>valorMaximo){        
        valorMaximo = arrayOriginal[i]
    }else if(arrayOriginal[i]<valorMinimo){
        valorMinimo = arrayOriginal[i]
    }
}
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)

*/













