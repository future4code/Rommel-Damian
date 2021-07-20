import React, { Component } from 'react';
import PerguntaAberta from './PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';

class Etapa3 extends Component {
    render() {
        return (
            <div>
              <h1>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
              <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"}/>
              <PerguntaOpcoes  pergunta={"6. Você fez algum curso complementar?"}
                opcoes={[
                    "Nenhum",
                    "Curso Técnico",
                    "Curso de Inglês"     
               ]}/>
        
            </div>
        );
    }
}

export default Etapa3;
