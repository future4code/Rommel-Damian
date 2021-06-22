/*
---------------------------EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO-------------------------------------
=====================================================================================================
1.-lEIA O CODIGO

const instrutoras = [
    {nome: "Lais", modulo: 1},
    {nome: "Amanda",modulo: 2},
    {nome: "Chijo",modulo: 3}
    ]

const nomeInstrutora = instrutoras[0].nome
console.log(nomeInstrutora)
===========================================
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

RPTA:--------------------------------------

 1.- O primeiro console vai imprimir: "Matheus Nachtergaele"
 2.- O segundo console vai imprimir o ultimo elemento do array : "Virginia Cavendish"
 3.- O terceiro console vai imprimir : canal: "Globo", horario: "14h"

 =====================================================================================================
2.-lEIA O CODIGO

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

RPTA:-----------------------------------------------------------------------------------------------

ITEM A:

1.O primeiro console vai imprimir os elementos do objeto mesmo (cachorro) com seus datos: nome, idade e raça
2.O segundo console correspondente ao gato vai imprimir quase os mesmos datos do cachorro porque foram
  copiados porém a mudança que vai fazer é com o nome. En ves de "Juca" vai se chamar "Juba".
3.O terceiro vai imprimir quase todo só que nesta ves ta copiando os dados do objeto gato
  então a mudança que vai acontecer é com o nome , neste caso vai reemplazar a vocal "a" pela "o"  
  o nome vai ser "Jubo"
  
ITEM B

Os pontos ajudam para que um objeto possa ser copiado e inserido em outro objeto.
  
=====================================================================================================
3.- lEIA O CODIGO

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

RPTA:-----------------------------------------------------------------------------------------------

ITEM A:
- No primeiro console vai imprimir false porque esta chamando o valor do elemento backender e no segundo
  console nao vai imprimir nada porque o elemento altura nao foi declarada.
- Isto aconteceu porque a função esta buscando o elemento altura e como nao esta encontrando
  no console imprime undefined.


---------------------------------EXERCICIOS DE ESCRITA DE CÓDIGO-------------------------------------
=====================================================================================================

1. 
const dadosPessoais = {
    nome : "Amanda",
    apelido : ["Amandinha", "Mandinha", "Mandi"] 
}
const devolveMensagen = (objeto) => {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: 
    ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}`)
}
devolveMensagen(dadosPessoais)

const pessoa ={
    ...dadosPessoais,
    apelido : ["Manda","Amandao","Amandita"]
}
devolveMensagen(pessoa)


2. 
const pessoa1 = {
    nome: "Rommel",
    idade: 31,
    profisao: "Licenciado em sistemas"
}
const pessoa2 = {
    nome: "Hugo",
    idade: 30,
    profisao: "Nutricionista"
}
const valores = (dados)=>{
    nome = dados.nome
    idade = dados.idade
    profisao = dados.profisao
    integrar = `${nome},${nome.length},${idade},${profisao},${profisao.length}`
    console.log(integrar.split(","))
}
valores(pessoa1)
valores(pessoa2)



3.
//Escopo global

const carrinho = []

const fruta1 ={
    nome: "abacaxi",
    disponibilidade: true
}
const fruta2 ={
    nome: "banana",
    disponibilidade: true
}
const fruta3 ={
    nome: "melancia",
    disponibilidade: true
}

function AdicionarFruta(fruta){
   return carrinho.push(fruta)

}

AdicionarFruta(fruta1)
AdicionarFruta(fruta2)
AdicionarFruta(fruta3)
console.log(carrinho)


 ============================= Desafio 1 ===============================================


const funcao = () =>{
    const nome = prompt("Insira seu nome")
    const idade = prompt("Insira sua idade")
    const profissao = prompt("Insira sua profissao")
    
    const dadosPessoais = {
        nome: nome,
        idade : idade,
        profissao : profissao
    }

    console.log(dadosPessoais)
}

funcao()

================================Desafio 2 ================================================

const filme1 = {
    anoLancamento : 2001,
    filme : "Harry Potter"
}

const filme2 = {
    anoLancamento : 2011,
    filme : "Real Steel"
}

const funcao = (filme1, filme2) =>{   
   console.log("O primeiro filme foi lançado antes do segundo? -", Number(filme1.anoLancamento) < Number(filme2.anoLancamento) ) 
   console.log("O primeiro filme foi lançado no mesmo ano do segundo? -", Number(filme1.anoLancamento) == Number(filme2.anoLancamento) )
}
funcao(filme1, filme2)

================================Desafio 3================================================



function controleEstoque(fruta){
    return {
        ...fruta,
        disponibilidade: !fruta.disponibilidade
     }
   
}

console.log(controleEstoque(fruta1))
console.log(controleEstoque(fruta2))
console.log(controleEstoque(fruta3))

//============================================================================================



*/ 

