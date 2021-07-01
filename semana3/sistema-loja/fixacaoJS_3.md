# EXERCICIO 01
~~~javascript
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  if(ex<=10 && p1<=10 && p2 <= 10 ){
    let mediaFinal
    let conceito
    mediaFinal = (ex+p1+p2)/3

    if(mediaFinal>=9){
      conceito = "A"
    }else if(mediaFinal<9 && mediaFinal>=7.5){
      conceito = "B"
    }else if(mediaFinal<7.5 && mediaFinal>6){
      conceito = "C"
    }else if(mediaFinal<6){
      conceito="D"
    }

  return conceito
  }else{
     throw TypeError("A calificação preenchida é incorreta, coloca uma calificação de 1 ao 10")
  }
  
}
~~~

