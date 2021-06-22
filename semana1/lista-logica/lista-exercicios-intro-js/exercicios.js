// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------


// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const largura = prompt("digite largura")
  const altura = prompt("digite altura")

  console.log(altura*largura)

}
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("digite o ano atual"))
  const anoNascimento = Number(prompt("digite o ano de nascimento"))
   
  console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso,altura) {
  // implemente sua lógica aqui    
  return peso/(altura*altura)
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("insira seu nome").toString()
  const idade = Number(prompt("insira sua idade"))
  const email = prompt("insira seu email").toString()
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("insira sua primeira cor")
  const cor2 = prompt("insira sua segunda cor")
  const cor3 = prompt("insira seu terceira cor")
  const saida = [cor1,cor2,cor3]

  console.log(saida)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase() 

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return(custo/valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return(string1.length === string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const objFirst = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = objFirst
  
  return array
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return (string1.toLowerCase() === string2.toLowerCase())
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("insira ano atual"))
  const anoNascimento = Number(prompt("insira ano nascimento"))
  const anoCarteira = Number(prompt("insira ano que foi emitido sua carteira de identidade"))
  const idade = anoAtual - anoNascimento
  const verifica = anoAtual - anoCarteira
  const menosque20 = idade<=20 && verifica>=5
  const entre20e50 = idade > 20 && idade <=50 && verifica >=10
  const maior50 =   idade>=50 && verifica>=15
  console.log( menosque20 || entre20e50 || maior50)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  //return ano % 100 === 0 ? ano % 400 === 0 : ano % 4 === 0 
  const multiplo400 = (ano%400) === 0
  const multiplo4 = (ano%4===0) && !(ano%100===0 && !ano%400===0)
  return multiplo400 || multiplo4

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let validade18 = prompt("Você tem mais de 18 anos?")
  let ensinoMedio = prompt("Você possui ensino medio completo?")
  let disponibilidade = prompt("Você possui disponibilidade durante os horarios do Curso?")
  console.log(validade18.includes("sim") && ensinoMedio.includes("sim") && disponibilidade.includes("sim"))
  

}