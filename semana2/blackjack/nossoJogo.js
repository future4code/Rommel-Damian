/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 
*/

 console.log("Boas vindas ao jogo de Blackjack!")
 let confirmacao = confirm("Quer iniciar uma nova rodada?")
 //console.log("confirmacao",confirmacao)

   if (confirmacao){
      const cartaU1 = comprarCarta();
      const cartaU2 = comprarCarta(); 
      const cartaC1 = comprarCarta(); 
      const cartaC2 = comprarCarta();        
      const cartaUsuario1 = {
         cartaTexto: cartaU1.texto,  valor: cartaU1.valor
      }
      const cartaUsuario2 = {
         cartaTexto: cartaU2.texto,  valor: cartaU2.valor
      }
      let valorSumadoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
      const cartaComputador1 = {
         cartaTexto: cartaC1.texto,  valor: cartaC1.valor
      }
      const cartaComputador2 = {
         cartaTexto: cartaC2.texto,  valor: cartaC2.valor
      }
      let valorSumadoComputador = cartaComputador1.valor + cartaComputador2.valor

      console.log(`Usuário - cartas: ${cartaUsuario1.cartaTexto} ${cartaUsuario2.cartaTexto} - puntuação: ${valorSumadoUsuario}`) 
      console.log(`Computador - cartas: ${cartaComputador1.cartaTexto} ${cartaComputador2.cartaTexto} - puntuação: ${valorSumadoComputador}`) 

      if(valorSumadoUsuario>valorSumadoComputador){
         console.log("O usuário ganhou!")
      }else if(valorSumadoUsuario<valorSumadoComputador){
         console.log("O computador ganhou!")
      }else{
         console.log("Empate!")
      }

   }else{
      console.log("O jogo acabou")
   }

