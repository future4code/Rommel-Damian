# EXERCICIO 05

### Enunciado
*Temos um array de animais diversos, onde cada bichinho é um objeto com as propriedades: *nome e classificacao. A classificacao tem três valores possíveis: peixe, ave ou mamífero
*Crie um novo array que tenha apenas os nomes dos animais, no formato de strings.

~~~javascript
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 // Escreva seu código aqui
    const nomesDeAnimais = animais.map(animal => {
      return animal.nome
    })
    return nomesDeAnimais
    
}
~~~

