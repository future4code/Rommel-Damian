import axios from 'axios';
import React, { Component } from 'react';
import styled from "styled-components"


const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
`

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 20px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;   
`

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

    pegarUsuarios = async () => {
    
        // axios
        //  .get(`${url}/users/getAllUsers`, {headers})
        //  .then((res) => {     
        //     this.setState({ users : res.data.result})  
        //     // console.log(res.data.result[0].id)    
        // })
        //  .catch((err) => {
        //     alert(err.response.data);
        //   });     
        
        try {
            const res = await axios.get(`${url}/users/getAllUsers`, {headers})
            this.setState({ users : res.data.result}) 
        
        } catch (err) {
            alert ("Ocorreu um problema, tente novamente")
        }
    
    
    }


    eliminarUsuario = (userId) => {
        const arrayUsers = this.state.users.filter(user => user.id !== userId)

          axios
            .delete(`${url}/users/deleteUser?id=${userId}`, {headers})              
            .then((res) => {
              if(window.confirm("Tem Certeza que você quer eliminar?")) {
                    this.setState({ users : arrayUsers})     
                    alert("Usuario eliminado com succeso")                    
              }else {
                    alert("Usuario não eliminado")   
              }  
                                           
            })
            .catch((err) =>{
                console.log("entrou no catch")
                alert(err.response.data)
            })


    }

    render() {
         
        console.log(this.state.users) 
        const componentsUsers = this.state.users.map((user) => {
            return <CardUsuario key={user.id}>  {user.name} {" "}
                   <button onClick={() => this.eliminarUsuario(user.id)}>Eliminar</button></CardUsuario>         
                  
            })
        return (
            <div>     
                <h1>Lista de Pessoas</h1>                  
                
                <Content>                        
                    {componentsUsers}        
                </Content>
            </div>
            
            
        );
    }
}

export default ListaPessoas;