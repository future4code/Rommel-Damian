import React, { Component } from 'react';
import PerguntaAberta from './PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';


class Etapa1 extends Component {
    render() {
        return (
            <div>
              <h1>Etapa 1 - DADOS GERAIS</h1>
              <PerguntaAberta pergunta={"1. Qual o seu nome?"}/>
              <PerguntaAberta pergunta={"2. Qual sua idade?"} />
              <PerguntaAberta pergunta={"3. Qual seu email?"} />
              <PerguntaOpcoes pergunta={"4. Qual a sua escolaridade?"}                 
                opcoes={[
                     "Ensino Médio Incompleto",
                     "Ensino médio completo",
                     "Ensino superior incompleto",
                     "Ensino superior completo"
                ]}/>

            </div>
        );
    }
}

export default Etapa1;
