import React, { Component } from 'react';


class PerguntaAberta extends Component {


    render() {
        return (
            <div>
              <h3>{this.props.pergunta}</h3>
              <input/>
            </div>
        );
    }
}

export default PerguntaAberta;
