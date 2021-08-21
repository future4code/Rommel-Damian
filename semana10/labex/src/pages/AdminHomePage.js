import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { useProtectedPage } from '../hooks/useProtectedPage'; 


const ListMatch = styled.div`
    display: flex;   
    padding: 10px 20px;
    margin: 15px auto;
    justify-content: space-between;
    overflow: auto;
    box-shadow : 0 0 15px -5px rgb(0,0,0, .5);
    cursor:pointer;
    :hover{
        transition: background-color 0.45s;
        background-color: #e4ebed;
    }
`
const Botao = styled.i`
    cursor: pointer;
    :hover{
        transition: color 0.55s;
        color: Tomato;
    }    
`
const AdminHomePage = () => {

    const [trip, setTrip] = useState([])    
    const aluno = "rommel-rios-lovelace"
    const token = localStorage.getItem('token')

    //Router Paginas=========================
    const history = useHistory()
    const goToLoginPage = () => {
        history.push("/Login")
    }
    const goToHomePage = () => {
        history.push("/")
    }
    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }
    //========================================
    
    useProtectedPage()
    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if(token === null){
    //        console.log("não esta logado!!!") 
    //        history.push('/Login')
    //     }
    // }, []); 


    useEffect(() => {
        getTrips()        
    }, []);

    const getTrips = () => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
        .then((res) => {
            // console.log(res.data.trips)
            setTrip(res.data.trips)
            // console.log("trip", trip.id)
        })
        .catch((err) => {
            console.log(err.data)
        })
    }
    //Apagar viagens==============================================================================================
    const deleteTrip = (itemID) => {        
        const viagens = trip.filter(item => item.id !== itemID )        
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${itemID}`, {
                headers:{
                    auth: token
                }
            })                   
                 .then((res) =>{
                    console.log(itemID.id)
                    if(window.confirm(`tem certeza querer eliminar a viagem`)){
                        setTrip(viagens)
                        alert("viagen apagada")
                        getTrips() 
                    }else {
                        alert("viagen não eliminada")  
                    }              
                 })
                 .catch((err) => {
                    console.log(err)
                    alert("entrou no catch")                   
                 })
    }
    //============================================================================================================
    
    // Log out =========================================
    const returnLogin = () => {
        localStorage.removeItem('token')
        goToLoginPage()
    }
    // =================================================

    //Ao dar click no título da viagem====================
    const goToTripDetail  = (id) => {
        history.push(`/admin/trips/${id}`)
    }
    //======================================================


    
    return (
        <Container className="d-flex justify-content-center" 
                   style={{ width: '50rem' }}>
            <Form>
                <div className="d-flex justify-content-center p-2">
                    <h1>Painel Administrativo</h1>
                </div>
                <div className="d-flex justify-content-around p-2">
                    <Button variant="secondary" 
                            type="submit" 
                            onClick={goToHomePage}>
                        Voltar
                    </Button>
                    <Button variant="success" 
                            type="submit" 
                            onClick={goToCreateTripPage}>
                        Criar Viagem
                    </Button>
                    <Button variant="danger" 
                            type="submit" 
                            onClick={() => returnLogin()}>
                        Logout
                    </Button>
                </div> 
                <hr />
                <br />
                <div>
                    {trip ? (trip.map(item=> (
                        <ListMatch key={item.id}
                                   onClick={() => goToTripDetail(item.id)}>
                            <p>{item.name}</p> 
                            <Botao className="fas fa-trash-alt fa-2x"
                                   onClick={() => deleteTrip(item.id)} ></Botao>                                        
                        </ListMatch>
                        
                    ))) :  <p>Carregando</p> }
                </div>
            </Form>
        </Container>
    )
}

export default AdminHomePage
