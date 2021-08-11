import React, { Component } from 'react';
import axios from 'axios';


const url = "https://us-central1-future4-users.cloudfunctions.net/api";

const headers = {
    "api-token": "00e30928fa107f4157583e5631d18f95"  
  }


class Cadastro extends Component {

    state = {
        inputUsuario: "",
        inputEmail: ""
    }

    mudaInputUsuario = (e) => {
        this.setState({inputUsuario: e.target.value})
    }

    mudaInputEmail = (e) => {
        this.setState({inputEmail: e.target.value})
    }

    criarUsuario = () => {
        const body = {
            name: this.state.inputUsuario,
            email: this.state.inputEmail
        }

        axios.post(            
            `${url}/users/createUser`,body, 
            {headers, method:"POST"}        
        )     
        .then((res) => {
            alert("Usuario criado com succeso")
            this.setState({inputUsuario: ""})
            this.setState({inputEmail: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
            this.setState({inputUsuario: ""})
            this.setState({inputEmail: ""})
        })
    }

    render() {
        return (
            <div>                
                <h1>Cadastro</h1>
                <input
                    placeholder="Nome"
                    value={this.state.inputUsuario}
                    onChange={this.mudaInputUsuario}
                />
                <br/>
                <input
                     placeholder="Email"
                     value={this.state.inputEmail}
                     onChange={this.mudaInputEmail}
                />
                <br/><br/>
                <button onClick={this.criarUsuario}>Enviar</button>


            </div>
        );
    }
}



export default Cadastro;