/*
=========================================================================================================
---------------------------EXERCICIOS DE INTERPRETAÇÃO DE CODIGO-----------------------------------------
=========================================================================================================
1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

----------------------------------------------RPTA---------------------------------------------------
a. False
b. False
c. True
d. Boolean
------------------------------------------------------------------------------------------------------
===================================================================================================
2. Seu colega se aproxima de você falando que o código dele não funciona como devia.
   Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
----------------------------------------------RPTA---------------------------------------------------

O problema que teve meu colega é que ao momento de declarar suas variaveis ele esqueceu
de colocar no prompt na frente dele o comando de NUMBER, esse comando converte para o tipo
numerico o valor deles.

Desse jeito tal qual como esta vai imprimir um string na qual vai somente JUNTAR os valores 
do primeiro e segundo numero
===================================================================================================

3.Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso 
  no console seja, de fato, a soma dos dois números. 

----------------------------------------------RPTA---------------------------------------------------
minha sugestão é que coloque somente o comando NUMBER do lado de comando PROMPT desse jeito
já o programa vai entender que sua variável é um número.
===================================================================================================



=========================================================================================================
---------------------------EXERCICIOS DE ESCRITA DE CODIGO-----------------------------------------
=========================================================================================================

1. Faça um programa que:
a) Pergunte a idade do usuário
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 
    seguido pela resposta (`true` ou `false`)
d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

----------------------------------------------RPTA---------------------------------------------------
const idadeUsuario = prompt("Qual é sua idade?")
const idadeAmigo = prompt("Qual é a idade do seu melhor amigo?")

console.log("Sua idade é maior do que a do seu melhor amigo? -", idadeUsuario > idadeAmigo)
console.log("A diferença das idades é ", idadeUsuario - idadeAmigo)
===================================================================================================
2. Faça um programa que:
a) Peça ao usuário que insira um número **par**
b) Imprima na console **o resto da divisão** desse número por 2.
c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
----------------------------------------------RPTA---------------------------------------------------
const numeroPar = Number(prompt("Insira um numero Par"))
console.log("O resto é", numeroPar%2)

// Notei que quando eu inseria um número par o resto dava 0 porém quando eu colocava impar
// sempre saí 1
===================================================================================================
3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    a) A idade do usuário em meses
    b) A idade do usuário em dias
    c) A idade do usuário em horas
----------------------------------------------RPTA---------------------------------------------------
const idadeAnos = prompt("Insira sua idade")
let operacao
//Idade em meses
operacao = (idadeAnos*12)
console.log("Sua idade em meses é", operacao)
//Idade em dias
operacao = (idadeAnos*365)
console.log("Sua idade em dias é", operacao)
//Idade em horas
operacao = (idadeAnos*8766)
console.log("Sua idade em horas é", operacao)
===================================================================================================

4. Faça um programa que pergunte ao usuário dois números. Em seguida, 
   faça as operações e imprima no console as seguintes mensagens:

----------------------------------------------RPTA---------------------------------------------------
const primeiroNumero = Number(prompt("Insira o primeiro numero"))
const segundoNumero = Number(prompt("Insira o segundo numero"))
let divisorOperacao

console.log("O primeiro numero é maior que segundo?",primeiroNumero > segundoNumero )
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
divisorOperacao = primeiroNumero%segundoNumero
console.log("O primeiro numero é divisível pelo segundo?", divisorOperacao===0)
divisorOperacao = segundoNumero%primeiroNumero
console.log("O segundo numero é divisível pelo primeiro?",divisorOperacao===0)
===================================================================================================

*/

















