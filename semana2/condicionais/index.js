/*
=====================================================================================================
===============================EXERCICIOS DE INTERPRETACAO DE CODIGO=================================
=====================================================================================================

1.- Leia o código abaixo

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

RPTA:===========================================================================================
a) O que faz o codigo é testar se o número inserido no prompt é divisivel por 2 ou não
   primeiro o prompt aparece para que possa ser inserido por qualquer numero
   depois daí esse número inserido é um string por default então criam outra variável
   pra que possam convertir em number. Depois daí esse número vai no IF pra verificar se é
   divisivel por 2, se o número é o indicado imprime "PASSOU NO TESTE" se não "NAO PASSOU O TESTE"
b) Imprime para aqueles números que sao pares ou seu resto é 0.
c) Imprime para aqueles números que nao sao pares ou tem resto que nao seja 0.

2.- Leia o código abaixo

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

RPTA:===========================================================================================
a) O codigo de acima serve para de acordo á fruta inserida amostrarem o preço num console.log
b) a mensagem é : "O preço da fruta maça é R$ 2.25"
c) a mensagem sera: "O preço da fruta Pêra é R$ 5", se vc nao coloca o break automaticamente 
   vai pro default.


3.- Leia o código abaixo

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

RPTA:===========================================================================================
a) A primeira linha com um prompt esta pedindo pro usuario inserir qualquer número.
b) Se for 10 a mensagem será "Esse número passou o teste"  se for -10 nao vai amostrar nada porque
   nao foi validado.
c) tem um erro sobre "uncaught" aconcete que o ultimo console.log esta querendo amostrar o conteúdo
   da variável mensagem mas nao consigue porque o valor dessa variáve esta dentro do IF e o console
   esta fora do IF.




=====================================================================================================
===================================EXERCICIOS DE ESCRITA DE CODIGO===================================
=====================================================================================================   

1.- 
RPTA:===========================================================================================

const maiorIdade = Number(prompt("Insira sua idade"))

if (maiorIdade >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir.")
}


2.- 
RPTA:===========================================================================================

const turno = prompt("Insira M para MATUTINO o V para VESPERTINO ou N para NOTURNO")

if(turno == "M"){
    console.log("Bom Dia!")
}else if(turno == "V"){
    console.log("Boa Tarde!")
}else{
    console.log("Boa NOite")
}

3.-
RPTA:===========================================================================================

const turno = prompt("Insira M para MATUTINO o V para VESPERTINO ou N para NOTURNO")
switch(turno){
    case "M":
        console.log("Bom Dia!")
    break;
    case "V":
        console.log("Boa Tarde")
    break;
    case "N":
        console.log("Boa Noite")
    break;
    default:
        console.log("Seja Bem-Vindo")
    break;
}

4.- 
RPTA:===========================================================================================

const generoFantasia = prompt("INSIRA qual o gênero de filme que vão assistir??")
const precoIngreso = Number(prompt("Insira o preco do Ingreso"))

const validarString = (string) =>{    
    const palavraMinuscula =  string.toLowerCase() 
    return palavraMinuscula
}
const generoFilme = validarString(generoFantasia)

if(generoFilme == "fantasia" && precoIngreso < 15){
    console.log("BOM FILME!!")
}else if(generoFilme != "fantasia" && precoIngreso > 15){
    console.log("Escolha outro Filme :( ")
}else{
    console.log("Vai pra casa :(")
}


//DESAFIO 1
==================================================================================================

const generoFantasia = prompt("INSIRA qual o gênero de filme que vão assistir??")
const precoIngreso = Number(prompt("Insira o preco do Ingreso"))

const validarString = (string) =>{    
    const palavraMinuscula =  string.toLowerCase() 
    return palavraMinuscula
}
const generoFilme = validarString(generoFantasia)

if(generoFilme == "fantasia" && precoIngreso < 15){    
    const lanche = prompt("Qual Lanchinho vai comprar??")
    if(lanche.length >=1){
        console.log("Bom Filme")
        console.log("Aproveite o sua/seu: "+ lanche + " :)")
    }else {
        console.log("Bom Filme")
        console.log("Sem Lanche")
    }
}else if(generoFilme != "fantasia" && precoIngreso > 15){
    console.log("Escolha outro Filme :( ")
}else{
    console.log("Vai pra casa :(")
}

//DESAFIO 2
==================================================================================================



*/

const nomeCompleto = prompt("Insira seu nome completo")
const tipoJogo = prompt("Insira IN de Internacional ou DO de Domestico")
const etapaJogo = prompt("Insira SF de semi-final ou DT decisao terceiro lugar ou FI de Final")
const categoria = Number(prompt("Insira 1 ou 2 ou 3 ou 4"))
const quantidadeIngresso = Number(prompt("insira a quantidade de ingressos por favor."))
let nomeDoTipoJogo = ""
let nomeEtapaJogo = ""
let preco = 0
let valorTotal = 0
let signoMoeda = ""

const validarString = (string) =>{    
    const palavraMinuscula =  string.toUpperCase() 
    return palavraMinuscula
}


if(validarString(tipoJogo) === "IN"){
    nomeDoTipoJogo = "Internacional"
    signoMoeda = "U$ "
}else if(validarString(tipoJogo) === "DO"){
    nomeDoTipoJogo = "Domestico"
    signoMoeda = "R$ "
}

if(validarString(etapaJogo) === "SF"){
    nomeEtapaJogo = "Semi-final"
}else if(validarString(etapaJogo) === "DT"){
    nomeEtapaJogo = "Decisão do terceiro lugar"
}else if (validarString(etapaJogo) === "FI"){
    nomeEtapaJogo = "Final"
}





if (tipoJogo === "DO"){

    if (etapaJogo === "SF"){

        switch(categoria){            
            case 1:
                preco = 1320
                valorTotal = quantidadeIngresso * preco
                break;
            case 2:
                preco = 880
                valorTotal = quantidadeIngresso * preco
                break;
            case 3:
                preco = 550
                valorTotal = quantidadeIngresso * preco
                break;
            case 4:
                preco = 220
                valorTotal = quantidadeIngresso * preco
                break;
            default:
                preco = 0
                break;
        }     

    }else if (etapaJogo === "DT"){

        
        switch(categoria){            
            case 1:
                preco = 660
                valorTotal = quantidadeIngresso * preco
                break;
            case 2:
                preco = 440
                valorTotal = quantidadeIngresso * preco
                break;
            case 3:
                preco = 330
                valorTotal = quantidadeIngresso * preco
                break;
            case 4:
                preco = 170
                valorTotal = quantidadeIngresso * preco
                break;
            default:
                preco = 0
                break;
        }

    }else if (etapaJogo === "FI"){

        
        switch(categoria){            
            case 1:
                preco = 1980
                valorTotal = quantidadeIngresso * preco
                break;
            case 2:
                preco = 1320
                valorTotal = quantidadeIngresso * preco
                break;
            case 3:
                preco = 880
                valorTotal = quantidadeIngresso * preco
                break;
            case 4:
                preco = 330
                valorTotal = quantidadeIngresso * preco
                break;
            default:
                preco = 0
                break;
        }

    }

}else if (tipoJogo === "IN"){
    
    if (etapaJogo === "SF"){
       
        switch(categoria){            
            case 1:
                preco = 1320/4.10
                valorTotal = quantidadeIngresso * preco
                
                break;
            case 2:
                preco = 880/4.10
                valorTotal = quantidadeIngresso * preco
                break;
            case 3:
                preco = 550/4.10
                valorTotal = quantidadeIngresso * preco
                break;
            case 4:
                preco = 220/4.10
                valorTotal = quantidadeIngresso * preco
                break;
            default:
                preco = 0
                break;
        }  

    }else if (etapaJogo === "DT"){

        
        switch(categoria){            
            case 1:
                preco = 660/4.10
                valorTotal = quantidadeIngresso * preco
                break;
            case 2:
                preco = 440/4.10
                valorTotal = quantidadeIngresso * preco
                break;
            case 3:
                preco = 330/4.10
                valorTotal = quantidadeIngresso * preco
                break;
            case 4:
                preco = 170/4.10
                valorTotal = quantidadeIngresso * preco
                break;
            default:
                preco = 0
                break;
        } 

    }else if (etapaJogo === "FI"){
     
        switch(categoria){            
            case 1:
                preco = 1980/4.10
                valorTotal = quantidadeIngresso * preco
                break;
            case 2:
                preco = 1320/4.10
                valorTotal = quantidadeIngresso * preco
                break;
            case 3:
                preco = 880/4.10
                valorTotal = quantidadeIngresso * preco
                break;
            case 4:
                preco = 330/4.10
                valorTotal = quantidadeIngresso * preco
                break;
            default:
                preco = 0
                break;
        }
        
    }

}

console.log("------Dados da compra-------")
console.log("Nome do cliente: " + nomeCompleto)
console.log("Tipo de jogo: " + nomeDoTipoJogo)
console.log("Etapa do jogo: " + nomeEtapaJogo)
console.log("Categoria: "+ categoria)
console.log("Quantidade de Ingresso: "+ quantidadeIngresso)
console.log("---------Valores-----------")
console.log("Valor do ingresso: "+ signoMoeda+preco)
console.log("Valor total: "+ signoMoeda+valorTotal)


