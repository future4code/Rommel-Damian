import axios from 'axios';
import React, { Component } from 'react';

const url = "https://us-central1-future4-users.cloudfunctions.net/api";

const headers = {
    "api-token": "00e30928fa107f4157583e5631d18f95"  
  }

class ListaPessoas extends Component {

    state = {
        users : [],
    }

    componentDidMount(){
        this.pegarUsuarios();
    }

    pegarUsuarios = () => {
       axios
         .get(`${url}/users/getAllUsers`, {headers})
         .then((res) => {     
            this.setState({ users : res.data.result})      
        })
         .catch((err) => {
            alert(err.response.data);
          });         
    }

    render() {
        console.log(this.state.users)
        const componentsUsers = this.state.users.map((user) => {
            return <li key={user.id}> {user.name} </li>
          })
        
        return (
            <div>
                <h1>Lista de Pessoas</h1>
                {componentsUsers}
            </div>
            
        );
    }
}

export default ListaPessoas;