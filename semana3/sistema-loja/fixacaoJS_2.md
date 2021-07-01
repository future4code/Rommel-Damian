# EXERCICIO 01
~~~javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let preco
  let custoTotal
  if(quantidade<12){
    preco = 1.30
  }else if(quantidade>=12){
    preco = 1.00
  }
  custoTotal = quantidade*preco
  return custoTotal
}
~~~

