import React, { Component } from 'react';

class PerguntaOpcoes extends Component {
    render() {
        return (
        <div>
            <h3>{this.props.pergunta}</h3>
            <select>
                {this.props.opcoes.map( (element) => {
                return <option>{element}</option>})}                              
            </select>
        </div>
        );
    }
}

export default PerguntaOpcoes;
