/*Exercícios de interpretação de código
========================================
   1) Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
   ============================
   RPTA: 
     Primer console.log =   10
     Segundo console.log = 10, 5
   ============================ 
*/

/* 2) Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
   ===========================
     RPTA: 
     console.log =  10,10,10  
    ==========================   
*/

/*
   3) Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. 
      Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, 
      os nomes não podem começar com números ou caracteres especiais.
    ==============================================================================================
    RPTA: 
      - As variaveis devem seguir o padrão do camelCase, é por isso que se mudou com nomes
        que tenham sentido com o que se quer fazer no programa.
      - Se colocaram na frente o método de conversão NUMBER, porque termos que fazer uma divisão 
        entre números e não por variaveis STRING.
      - Se corrigiu a divisão colocando as variaveis ao reves já que não estava fazendo a divisão
        corretamente.    
    ==============================================================================================
    let horasTrabalhadas = Number(prompt("Quantas horas você trabalha por dia?"))
    let pago = Number(prompt("Quanto você recebe por dia?"))
    alert(`Voce recebe ${pago/horasTrabalhadas} por hora`)
*/







//====================================================================================================
/*Exercícios de escrita de código
======================================================================================================
1) Construa um programa, seguindo os seguintes passos: 
   a) Declare uma variável para armazenar um nome, sem atribuir um valor.
   b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
   c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

let Nome
let idade
console.log("Tipo variavel Nome", typeof Nome)
console.log("Tipo variavel idade", typeof idade)
=======================================================================
RPTA: O valor da variável é indefinida porque na declaração dela 
     Não iniciou com nenhum valor para interpretar-se de outro jeito.
=======================================================================

e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores 
às variáveis que acabou de criar.

let Nome = prompt("Coloque seu nome")
let idade = prompt("Coloque sua idade")

console.log("Tipo variavel Nome", typeof Nome)
console.log("Tipo variavel idade", typeof idade)

f) Novamente, imprima na tela o tipo dessas variáveis. 
O que você notou? Escreva em um comentário de código.
=======================================================================
RPTA:
Notei que o Nome e a idade agora são do tipo de variável STRING
=======================================================================

g) Para finalizar, imprima na tela a mensagem: "Olá nome,  
   você tem idade anos". Onde nome e idade são os valores 
   que o usuário inseriu
=======================================================================
RPTA:
let Nome = prompt("Coloque seu nome")
let idade = prompt("Coloque sua idade")

console.log("Tipo variavel Nome", typeof Nome)
console.log("Tipo variavel idade", typeof idade)
alert(`Olá ${Nome}, Você tem ${idade} anos`)
=====================================================================================================

2) Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: 
    "Você está usando uma roupa azul hoje?". Depois, siga os passos:
  a) Crie três novas variáveis, contendo as respostas
  b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
  ```
   Você está usando uma roupa azul hoje? - SIM
  ```
=====================================================================
RPTA:
const pergunta1 = "Você está usando uma roupa azul hoje?";
const pergunta2 = "Você hoje está com frio?";
const pergunta3 = "Você está com fome?";

let resposta1 = prompt(pergunta1)
let resposta2 = prompt(pergunta2)
let resposta3 = prompt(pergunta3)

alert(` ${pergunta1} - ${resposta1} 
        ${pergunta2} - ${resposta2} 
        ${pergunta3} - ${resposta3}         
     `)
====================================================================================================


3) Suponha que temos duas variáveis a e b, cada uma com um valor inicial
   Agora, queremos trocar os valores delas, de forma que `a` passe a ter 
   o valor de `b` e `b` passe a ter o valor de `a`.

=====================================================================================================
RPTA:
======


let A = prompt("Coloque o primeiro valor")
let B = prompt("Coloque o segundo valor")
let C 

C=A
A=B

console.log("O novo valor de A é", A) // O novo valor de a é 25
console.log("O novo valor de B é", C) // O novo valor de b é 10
======================================================================================================

DESAFIO
======
 

let numero1 = Number(prompt("coloque o primeiro número"))
let numero2 = Number(prompt("coloque o segundo número"))

console.log("O primeiro número somado ao segundo número resulta em:", numero1+numero2)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", numero1*numero2)

*/















