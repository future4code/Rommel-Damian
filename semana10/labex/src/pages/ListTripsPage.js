import React, {useState , useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { Container, Form } from 'react-bootstrap';

const ListMatch = styled.div`
    display: flex;   
    padding: 10px 20px;
    margin: 15px auto;
    justify-content: space-between;
    flex-direction: column;
    overflow: auto;
    box-shadow : 0 0 20px -1px rgb(0,0,0, .5);
    background-color : #FFFBDF;
    color: #34656D;
    /* cursor:pointer;
    :hover{
        transition: background-color 0.45s;
        background-color: #e4ebed; 
    }*/
`

const Spinner = styled.div`  
    border: 4px solid rgba(0,0,0, .1);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-left-color: #09f;
    margin-top: 5em;
    margin-left: 7em;   
    
    animation: spin 1s ease infinite;
    
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg)
        }
    }

`

const ListTripsPage = () => {
    const [trip, setTrip] = useState([])    
    const aluno = "rommel-rios-lovelace"
    //Router paginas============================
    const history = useHistory()
    const goToHomePage = () => {
        history.push("/")
    }  
    const goToApplicationPage = () => {
        history.push("/trips/application")
    }
    //==========================================

    useEffect(() => {
        getTrips()        
    }, []);

    const getTrips = () => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
        .then((res) => {
            setTrip(res.data.trips)
            // console.log(res.data.trips)
        })
        .catch((err) => {
            console.log(err.data)
        })
    }


    return (
        <Container className="d-flex justify-content-center">
            <Form>
                <div className="d-flex justify-content-center p-2">
                    <button type="button" 
                            className="btn btn-dark me-2"
                            onClick={goToHomePage}>Voltar</button>           
                    <button type="button" 
                            className="btn btn-dark ms-2"
                            onClick={goToApplicationPage} >Inscrever-se</button>         
                </div>
                <div className="d-flex justify-content-center p-2">
                    <h1>Lista de Viagens</h1>    
                </div>
                <hr />   
                <div>
                {trip ? (trip.map(item=> (
                            <ListMatch key={item.id}>
                                <p><strong>Nome: </strong> {item.name}</p>
                                <p><strong>Descrição: </strong> {item.description}</p> 
                                <p><strong>Planeta: </strong> {item.planet}</p> 
                                <p><strong>Duração: </strong> {item.durationInDays}</p> 
                                <p><strong>Data: </strong> {item.date}</p>                                                                    
                            </ListMatch>                        
                ))) : (<Spinner></Spinner>) }
                </div>
            </Form>             

        </Container>
    )
}

export default ListTripsPage
