/*
=======================================================================================================
===============================Exercícios de interpretação de código===================================
=======================================================================================================

1.- Leia o código

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

RPTA:
De acordo á aula de hoje sabemos que os metodos reservados contém os seguintes parametros>
-element
-index
-array
Então o que a gente vai receber no console é primeiro o valor do objeto 
seguido do seu indice e depois do array em geral.
-------------------------------------------------------------------------------------------------------

2.- Leia o código abaixo


const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

RPTA:
Vai imprimir só os nomes do objeto usuarios e vão ser colocados num array chamado novoArrayB
-------------------------------------------------------------------------------------------------------

3.- Leia o código abaixo

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

RPTA
Vai imprimir só os nomes do objeto usuarios a excepção de 
o usuario que tenha como apelido "Chijo"
e vão ser colocados num array chamado novoArrayB

-------------------------------------------------------------------------------------------------------


=======================================================================================================
===============================Exercícios de escrita de código=========================================
=======================================================================================================

1.-

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
  

//Item A 
 console.log("ITEM A")
 const arrayNomePet = pets.map((elemento) => {
        return elemento.nome
 })
  console.log(arrayNomePet)

//Item B   
console.log("ITEM B")
const  arrayCachorroSalchicha = pets.filter((salchicha)=>{
    return salchicha.raca === 'Salsicha'
})
console.log(arrayCachorroSalchicha)

//Item C
console.log("ITEM C")

const arrayPoodle = pets.filter(poddle => poddle.raca ==='Poodle')
//console.log(arrayPoodle)

const mensagemDesconto = arrayPoodle.map((elemento)=>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${elemento.nome}!`
})
console.log(mensagemDesconto)


2.-

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //Item A 
console.log("ITEM A")
const nomeProductos = produtos.map((producto)=>{
    return producto.nome
});
console.log(nomeProductos)

//Item B
console.log("ITEM B")
const productoDesconto = produtos.map((produto)=>{
    let desconto = produto.preco*0.05
    produto.preco -= desconto
    return produto;
})
console.log(productoDesconto)

//Item C
console.log("ITEM C")
const categoriaBebidas = produtos.filter(bebidas => bebidas.categoria === "Bebidas")
console.log(categoriaBebidas)

//Item D
console.log("ITEM D")
const productoYpe = produtos.filter(nome => nome.nome.includes("Ypê"))
console.log(productoYpe)

//Item E
console.log("ITEM E")
const mensagemCompra = productoYpe.map((elemento) =>{
    return `Compre ${elemento.nome} por R$${elemento.preco.toFixed(2)}`
}) 
console.log(mensagemCompra)




*/

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]
//item A
//Se eu quero amostrar o nome e o tipo faco deste jeito.
// const ordenarPokemons = pokemons.map(pokemon => {
//                                     pokemon.nome
//                                     return pokemon})
//console.log(ordenarPokemons.sort())

const ordenarPokemons = pokemons.map((pokemon)=>{
  return pokemon.nome
})
console.log(ordenarPokemons.sort())


const apagarRepetido = pokemons.map((elemento)=>{
     return elemento.tipo    
})

const resultado = apagarRepetido.reduce((a,e)=>{
      if(!a.find(d=>d==e)){
        a.push(e)
      }
      return a
}, [])

console.log(resultado);