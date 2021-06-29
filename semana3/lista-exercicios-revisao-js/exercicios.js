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
  let arraySegundoMaiorMenor = []
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let a = array[i - 1];
        array[i - 1] = array[i];
        array[i] = a;
      }
    }    
  }
  arraySegundoMaiorMenor.push(array[array.length-2])
  arraySegundoMaiorMenor.push(array[1])

  return arraySegundoMaiorMenor;
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let a = array[i - 1];
        array[i - 1] = array[i];
        array[i] = a;
      }
    }    
  }
  return array

}

// EXERCÍCIO 12
function filmeFavorito() {
  
  return {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]   
  }

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filme =  {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]   
  }

  return `Venha assistir ao filme ${filme.nome}, de ${Number(filme.ano)}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`

}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

  return{
    largura:lado1,
    altura:lado2,
    perimetro: 2*(lado1+lado2),
    area:lado1*lado2
  }

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

  return{...pessoa, nome:"ANÔNIMO"}

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  
  const maiorIdade = arrayDePessoas.filter((pessoa)=>{
    return pessoa.idade >=18
  })

  return maiorIdade
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const menorIdade = arrayDePessoas.filter((pessoa)=>{
    return pessoa.idade < 18
  })

  return menorIdade
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const multiplicaPor2 = array.map((numero)=>{
    return numero * 2
  })
  return multiplicaPor2
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const multiplicaPor2 = array.map((numero)=>{
    let numeroString = numero * 2
    return numeroString.toString()
  })
  return multiplicaPor2
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let novoArray = []
  let resposta
  for (let i = 0; i < array.length; i++) {    
    if(array[i]%2===0){
      resposta = `${array[i]} é par`
    }else{
      resposta = `${array[i]} é ímpar`
    }
    novoArray.push(resposta)
  }
  return novoArray
}


// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

  const comPermissao = pessoas.filter((pessoa)=>{
    return pessoa.altura >= 1.5 && pessoa.idade>14 && pessoa.idade<60
  })
   return comPermissao

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

  const SemPermissao = pessoas.filter((pessoa)=>{
    return pessoa.altura < 1.5 || pessoa.idade<=14 || pessoa.idade>60
  })
  return SemPermissao
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  for (let i = 0;i < consultasNome.length;i++) {
    for (let j = 0;j < consultasNome.length - i - 1;j++) {
      if (consultasNome[j].nome > consultasNome[j + 1].nome) {
        const temp = consultasNome[j]
        consultasNome[j] = consultasNome[j + 1]
        consultasNome[j + 1] = temp
      }
    }
  }
  return consultasNome
}


// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  for (let i = 0;i < consultasData.length;i++) {
    for (let j = 0;j < consultasData.length - i - 1;j++) {

      const arrayData1 = consultasData[j].dataDaConsulta.split('/')
      const dia1 = Number(arrayData1[0])
      const mes1 = Number(arrayData1[1])
      const ano1 = Number(arrayData1[2])

      const arrayData2 = consultasData[j + 1].dataDaConsulta.split('/')
      const dia2 = Number(arrayData2[0])
      const mes2 = Number(arrayData2[1])
      const ano2 = Number(arrayData2[2])

      const data1 = new Date(ano1, mes1 - 1, dia1).getTime()
      const data2 = new Date(ano2, mes2 - 1, dia2).getTime()

      if (data1 > data2) {
        const temp = consultasData[j]
        consultasData[j] = consultasData[j + 1]
        consultasData[j + 1] = temp
      }
    }
  }
  return consultasData
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  contas.forEach((conta) => {
    let totalDeCompras = 0
    conta.compras.forEach((valor) => {
      totalDeCompras += valor
    })
    conta.saldoTotal -= totalDeCompras
  })
  return contas
}
