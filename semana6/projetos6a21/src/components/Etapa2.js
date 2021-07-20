import React, { Component } from 'react';
import PerguntaAberta from './PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';

class Etapa2 extends Component {
    render() {
        return (
            <div>
                <h1>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <PerguntaAberta pergunta={"5. Qual curso?"}/>
                <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"}/>
            </div>
        );
    }
}

export default Etapa2;
