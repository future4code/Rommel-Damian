/**
 *===================================EXERCICIO DE INTERPRETAÇÃO DE CODIGO==============================
 
 =====================================1.Leia o código abaixo=========================================== 
 
 function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
   RPTA:
   =====

   -O que  vai ser impreso no primeiro console é a multiplicação parámetro com valor 2 por 5
    ou seja vai imprimir 10.
   -No segundo console vai imprimir 50. 
    
b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a 
   função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

   RPTA:
   =====

    -Absolutamente nada porque a função se bem já tem o parametro pra ser calculado não onde
    ser amostrado.

========================================================================================================

=====================================2.Leia o código abaixo===========================================

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade

RPTA:
=====

- O que faz essa função primeiro é pedir pro usuario inserir um texto,
- Segundo, tem uma função  que converte em minuscula o valor do parámetro 
  e depois verifica sé nesse valor tem uma palavra chamada "cenoura" ou seja
  vai retornar true o false
- Terceiro tem uma variável (resposta) na qual vai ser igualada pela função criada
  só que como parámetro vai colocar o texto inserido pelo prompt.
- E final um console.log para imprimir a variavel resposta. Ou seja vai retornar o TRUE ou FALSE  
 
b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`
  
RPTA:
=====
i.   true
ii.  false
iii. false

========================================================================================================




*===================================EXERCICIO DE ESCRITA DE CODIGO===================================

1.=============================== Escreva as funções explicadas abaixo:==============================

a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando 
   algumas informações sobre você, como: 

    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

    RPTA:
    ==========================================

     function mensagem() {
     console.log(`Eu sou Rommel, tenho 31 anos, moro em Lima,Perú e sou estudante`)
    }
    mensagem()

b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações 
   de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma 
   profissão (string). 
   Ela deve retornar uma string que unifique todas as informações da pessoa em uma 
   só mensagem com o template:
   RPTA:
   ==========================================

    function dadosPessoais(nome = String , 
                       idade = Number,
                       cidade = String,
                       profissao = String) 
    {
    console.log(`Oi meu nome é ${nome}, eu tenho ${idade} e moro em ${cidade}, e sou ${profissao}`)

    }
    dadosPessoais("Rommel",31,"Lima","Licenciado em sistemas da informação")

========================================================================================================

2.=============================== Escreva as funções explicadas abaixo:==============================

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
   faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima 
   no console o resultado.
   
   RPTA:
   ==========================================
    const operacao = function (num1,num2) {
        const soma = num1 + num2
        return soma       
     }
     const resultado = operacao(2,3)
     console.log(resultado)


b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número 
   é **maior ou igual** ao segundo.
   
   RPTA:
   ==========================================  
   function validarNumero(num1,num2) {
        console.log("O primeiro é maior que o segundo??? -", num1>num2)
   }
   validarNumero(14,7)

c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

   RPTA:
   ========================================== 
  const validacao = (numero = Number) => { 
    console.log("O número é par?? -", numero%2===0)
   }
   validacao(10)

d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa 
   mensagem, juntamente com uma versão dela em letras maiúsculas.

   RPTA:
   ========================================== 

   let textoDoUsuario = prompt("Insira uma mensagem")
   const mensagem = function(texto) {
       return texto.toLowerCase()
   }
   
   const resposta = mensagem(textoDoUsuario)
   console.log(resposta.length,resposta)

   ======================================================================================================


   3.=============================== Escreva as funções explicadas abaixo:==============================

   Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
   Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
   inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

   Números inseridos: 30 e 3
   Soma: 33
   Diferença: 27
   Multiplicação: 90
   Divisão: 10


   function calculadora(num1,num2) {
      console.log("Número inseridos: ", num1, "e", num2)
      console.log("Soma: " + (num1+num2))
      console.log("Diferença: " + (num1-num2))
      console.log("Multiplicação: " + (num1*num2))
      console.log("Divisão: " + (num1/num2))
   }

   calculadora(12,8)

   
   ========================================= DESAFIO 1 ============================================
   
   a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

   const texto = prompt("Colocar uma palavra")
   const imprimeParametro = (parametro) =>{
   return parametro
   }
   const amostrarParametro = imprimeParametro(texto)
   console.log("Resposta : ", amostrarParametro)


   b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
      Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma 
      como entrada para imprimi-lo
      
       
   const imprimeParametros = (num1,num2) =>{
        const soma = num1+num2
        console.log("A soma é: ", soma)
   }
   imprimeParametros(5,9)
  
 
   const imprimeParametro = (parametro) =>{
      return parametro
  }
  const amostrarParametro = imprimeParametro("Hola que tal")
  console.log("Resposta : ", amostrarParametro)

======================================================================================================

============================================ DESAFIO 2 ==============================================

Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o 
valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console

const TeoremaPitagoras = (cateto1,cateto2) =>{
   hipotenusa =  Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2))
   console.log("O valor da hipotenusa é: " + hipotenusa)
}
TeoremaPitagoras(4,3)


 */








   


