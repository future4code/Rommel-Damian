import React, { Component } from 'react';
import Cadastro from './Cadastro'
import ListaPessoas from './ListaPessoas'

class componentName extends Component {

    state = {
        pagina : "Cadastro"
    }

    renderizaPagina = () => {
        switch(this.state.pagina){
            case "Cadastro":
                return <Cadastro />;
            case "ListaPessoas":
                return <ListaPessoas/>;
        }
    }

    IrListaPessoas = () => {
        console.log("Estou dentro do metodo lista Pessoas")
        this.setState({ pagina : "ListaPessoas"});
    }

    IrCadastro = () => {
        console.log("Estou dentro do metodo Cadastro")
        this.setState({ pagina : "Cadastro"});
    }

    render() {
        return (
         
            <div>
                <h1>Home</h1>             
                <span>
                    <button onClick= {this.IrListaPessoas}>Ir para Lista de Pessoas</button>
                </span>
                    <br/>
                <span>
                    <button onClick= {this.IrCadastro}>Cadastrar Pessoa</button>
                </span>
                <hr/>
                {this.renderizaPagina()}
            </div>
            
        );
    }
}

export default componentName;