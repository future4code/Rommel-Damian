/*==========================================================================================
============================EXERCICIO DE INTERPRETAÇÃO DE CODIGO============================
============================================================================================

1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

========================================RPTA=======================================================
a. undefined
b. null
c. 11
d. 3
e. a posição 1 vai ser reemplazado por 19
f. 9
===================================================================================================

2. leia o codigo abaixo

const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

=====================================RPTA==========================================================

O que vai imprimir no console é:
  a) a frase vai aparecer em maiuscula e depois todas as vogais que tenham "A" vao ser
     reemplazadas por a vocal "I".
  b) a outra parte do console vai imprimir a quantidade de caracteres que tem na frase incluindo os
     spaces.
===================================================================================================




 ============================================================================================
===============================EXERCICIOS DE ESCRITA DE CODIGO===============================
=============================================================================================


1 . Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
    Em seguida, imprima na tela a seguinte mensagem:

    O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

=====================================RPTA==========================================================
const usuario = prompt("Insira seu nome de usuario")
const email = prompt("Insira seu e-mail")

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${usuario}`)
===================================================================================================

2 . Faça um programa que contenha um array com 5 das suas comidas preferidas, 
    armazenado em uma variável. Em seguida, siga os passos:

a) Imprima na tela o array completo

b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
   seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
   Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista


=====================================RPTA==========================================================
//a . 
const arrayComidas = ['Feijao','Ceviche','Lomo Saltado','Caldo de gallina','estrogonofe']
console.log(arrayComidas)
//b. 
console.log("Essas são as minhas comidas preferidas: ")
console.log(arrayComidas[0])
console.log(arrayComidas[1])
console.log(arrayComidas[2])
console.log(arrayComidas[3])
console.log(arrayComidas[4])

//c.
const pergunta = prompt("Insira sua comida favorita").toString()
console.log("resultado de pergunta: ", pergunta)
arrayComidas[1]=pergunta
console.log(arrayComidas)
===================================================================================================

3. Faça um programa, seguindo os passos:
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    c) Imprima o array na tela
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    e) Remova da lista o item de índice que o usuário escolheu.
    f) Imprima o array na tela

=====================================RPTA==========================================================
const listaDeTarefas = []
const tarefa1 = prompt("Insira sua primeira tarefa do día")
const tarefa2 = prompt("Insira sua segunda tarefa do día")
const tarefa3 = prompt("Insira sua terceira tarefa do día")
listaDeTarefas.push(tarefa1,tarefa2,tarefa3)
console.log(listaDeTarefas)
const digitarIndice = Number(prompt("Insira o indice de uma tarefa que você já realizou"))
alert(`Você escolheu a tarefa ${listaDeTarefas[digitarIndice].toString()}`)
listaDeTarefas.splice(digitarIndice,1);
console.log(listaDeTarefas)
===================================================================================================
- **DESAFIOS**

1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, 
       ignorando os espaços

const frase = prompt("Insira uma frase")
const arrayFrase = frase.split(" ")
console.log(arrayFrase); 

    2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa 
       que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

       const arrayFruta = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
indice = arrayFruta.indexOf("Abacaxi")
console.log("Indice:",indice, " Tamanho do array:", arrayFruta.length)

===================================================================================================
*/



















