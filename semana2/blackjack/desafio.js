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

let confirmacao = 
         confirm("Bem-vinde ao jogo de Blackjack"+"\n"+ 
                 "Quer iniciar uma nova rodada?")

if(confirmacao){
   const cartaU1 = comprarCarta();
   const cartaU2 = comprarCarta(); 
   const cartaC1 = comprarCarta(); 
   const cartaC2 = comprarCarta();   
   const usuario = [
                     {cartaTexto: cartaU1.texto,  valor: cartaU1.valor},
                     {cartaTexto: cartaU2.texto,  valor: cartaU2.valor}
                   ]

   const computador = [
                       {cartaTexto: cartaC1.texto, valor: cartaC1.valor},
                       {cartaTexto: cartaC2.texto, valor: cartaC2.valor}
                      ]
   const validarAs = (cartaUsuario, cartaComputador) =>{
      let cartaTextUser1 = usuario[0].cartaTexto
      let cartaTextUser2 = usuario[1].cartaTexto
      let cartaTextComp1 = computador[0].cartaTexto
      let cartaTextComp2 = computador[1].cartaTexto
      let as = "A"
      let cartaAcumuladaUsuario = cartaTextUser1+cartaTextUser2
      let valorCartaAcumuladaUsuario = Number(usuario[0].valor) + Number(usuario[1].valor)
      let cartaAcumuladaComputador = cartaTextComp1+cartaTextComp2
      let valorCartaAcumuladaComputador = Number(computador[0].valor) + Number(computador[1].valor)

      if(!cartaTextUser1.includes(as) && !cartaTextUser2.includes(as) && !cartaTextComp1.includes(as) && !cartaTextComp2.includes(as)){
       const informacao = confirm("suas cartas são: "+ cartaAcumuladaUsuario + ". A carta revelada do computador é " + cartaTextComp1+"\n"+"Deseja comprar mais uma carta??"  )
       if(informacao){
            let novaCartaUsuario = comprarCarta();
            cartaAcumuladaUsuario += novaCartaUsuario.texto 
            valorCartaAcumuladaUsuario += novaCartaUsuario.valor 
            while(valorCartaAcumuladaUsuario<21)
            {                            
               confirm("suas cartas são: "+ cartaAcumuladaUsuario + ". A carta revelada do computador é " + cartaTextComp1+"\n"+"Deseja comprar mais uma carta??"  )                
               cartaAcumuladaUsuario += novaCartaUsuario.texto 
               valorCartaAcumuladaUsuario += novaCartaUsuario.valor 
               console.log(valorCartaAcumuladaUsuario) 
            }
            let novaCartaComputador = comprarCarta();
            cartaAcumuladaComputador += novaCartaComputador.texto 
            valorCartaAcumuladaComputador += novaCartaComputador.valor

            if(valorCartaAcumuladaUsuario>valorCartaAcumuladaComputador){
               if(valorCartaAcumuladaUsuario>21){
                  alert("Usuário - cartas: "+ cartaAcumuladaUsuario + "- puntuação: "+ valorCartaAcumuladaUsuario +"\n"+ 
                  "Computador - cartas: "+ cartaAcumuladaComputador+ "- puntuação: " +valorCartaAcumuladaComputador+"\n"+
                  "O computador Ganhou!!")
               }
            
            }else if(valorCartaAcumuladaComputador>valorCartaAcumuladaUsuario) {
               if(valorCartaAcumuladaComputador>21){
                  alert("Usuário - cartas: "+ cartaAcumuladaUsuario + "- puntuação: "+ valorCartaAcumuladaUsuario +"\n"+ 
                  "Computador - cartas: "+ cartaAcumuladaComputador+ "- puntuação: " +valorCartaAcumuladaComputador+"\n"+
                  "O Usuario Ganhou!!")
               }
            }  
        }else{

            let novaCartaComputador = comprarCarta();
            while(valorCartaAcumuladaComputador<=21){
               cartaAcumuladaComputador += novaCartaComputador.texto 
               valorCartaAcumuladaComputador += novaCartaComputador.valor
            }  

            if(valorCartaAcumuladaUsuario>valorCartaAcumuladaComputador){
               if(valorCartaAcumuladaUsuario>21){
                  alert("Usuário - cartas: "+ cartaAcumuladaUsuario + "- puntuação: "+ valorCartaAcumuladaUsuario +"\n"+ 
                  "Computador - cartas: "+ cartaAcumuladaComputador+ "- puntuação: " +valorCartaAcumuladaComputador+"\n"+
                  "O computador Ganhou!!")
               }
            
            }else if(valorCartaAcumuladaComputador>valorCartaAcumuladaUsuario) {
               if(valorCartaAcumuladaComputador>21){
                  alert("Usuário - cartas: "+ cartaAcumuladaUsuario + "- puntuação: "+ valorCartaAcumuladaUsuario +"\n"+ 
                  "Computador - cartas: "+ cartaAcumuladaComputador+ "- puntuação: " +valorCartaAcumuladaComputador+"\n"+
                  "O Usuario Ganhou!!")
               }
            } 

         }

      }
   }
   validarAs(usuario,computador)

}else{
   console.log("O jogo acabou")
}




