// EXERCÍCIO 01
function inverteArray(array) {

  let invertido = []
  for (let i = array.length -1 ; i >= 0; --i) {
    invertido.push(array[i])
  }
  return invertido

}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
 let arrayPar = []
 for (let i = 0; i < array.length; i++) {
      if(array[i]%2===0){
        arrayPar.push(array[i])
      }            
 }
let elevados = arrayPar.map((numero)=>{
    return  Math.pow(numero,2)      
 })
  return elevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayPar = []
  for (let i = 0; i < array.length; i++) {
    if(array[i]%2===0){
      arrayPar.push(array[i])
    }      
  }
  return arrayPar   
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let valorMaximo = array[0]
  for (let i = 0; i < array.length; i++) {
    if(array[i]>valorMaximo){
       valorMaximo = array[i] 
    }    
  }
  return valorMaximo
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
  let respostas = []

   respostas.push(booleano1 && booleano2 && !booleano4)
   respostas.push((booleano1 && booleano2) || !booleano3)
   respostas.push((booleano2 || booleano3) && (booleano4 || booleano1))
   respostas.push(!(booleano2 && booleano3) || !(booleano1 && booleano3))
   respostas.push(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))

   return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let arrayPares = []
  for (let i = 0; i < n*2; i+=2) {    
     //console.log("Valor i: ",i, "Valor n: ",n*2)
     arrayPares.push(i)    
  }
  return arrayPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if(a === b && a=== c){
     return "Equilátero"
  }else if(a === b || a === c || b === c){
     return "Isósceles"
  }else 
     return "Escaleno"   
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  
  let maiorNumero
  let menorNumero

  if(num1>num2){
    maiorNumero = num1
    menorNumero = num2
  }else{
    maiorNumero = num2
    menorNumero = num1
  }

  const maiorDivisivelporMenor= maiorNumero%menorNumero===0

  const diferenca = maiorNumero - menorNumero  
  
  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelporMenor,
    diferenca: diferenca
  }
     
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

  
}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
