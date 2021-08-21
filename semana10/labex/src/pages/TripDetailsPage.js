import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory , useParams } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage'; 
import { Container, Form, Button } from 'react-bootstrap'
import styled from 'styled-components'

const ListMatch = styled.div`
    display: flex;   
    padding: 10px 20px;
    margin: 15px auto;
    justify-content: space-between;
    flex-direction: column;
    overflow: auto;
    box-shadow : 0 0 15px -5px rgb(0,0,0, .5);
    background-color : #E7E0C9;
    color: rgb(17, 50, 77);
    /* cursor:pointer;
    :hover{
        transition: background-color 0.45s;
        background-color: #e4ebed; 
    }*/
`

const TripDetailsPage = () => {

    //Chamo funcao custom hook para validar se eu estou logado
     useProtectedPage()
    //Chamando parametros=====================================
    const { id } = useParams();
    //Criacao de variaveis de estado =========================
    const [trip, setTrip] = useState(null)
    //aluno===================================================
    const aluno = "rommel-rios-lovelace"
    //chamando token==========================================
    const token = localStorage.getItem('token')
    //botao voltar============================================
    const history = useHistory()
    const goToTripsPage = () => {
        history.push("/admin/trips/list")
    } 

    //UseEffect para consultar viagem mediante validacao de token gerado no login
    useEffect(() => {
    axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${id}`, {
            headers:{
                auth: token
            }
        })
        .then((res) => {
            console.log(res.data.trip)
            setTrip(res.data.trip)            
        })
        .catch((err) => {
             console.log("Deu erro", err.response)   
        })

    }, [])

    const handleCandidates = (candidateId, approve) => {
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${id}/candidates/${candidateId}/decide` ,
                { approve: approve },
                {
                    headers:{
                        "Content-Type" : "application/json",
                        auth: token
                    }
                }
            )
            .then(() => {
                const atualizaTrip = { ...trip }
                const candidateIndex = atualizaTrip.candidates.findIndex(
                    (candidate) => candidate.id === candidateId
                )
                console.log("candidateIndex",candidateIndex)
                const [candidate] = atualizaTrip.candidates.splice(candidateIndex, 1) 
                
                if(approve){
                    atualizaTrip.approved.push(candidate)
                }
                setTrip(atualizaTrip)
            }) 
            .catch((err) => {
                console.log(err.response)
            })
    }

    const renderizaCandidatosAprovados = () => {
        return trip.approved.map((candidate) => {
            return <li key={candidate.id}>{candidate.name}</li>
        })
    }

    const getCandidates = () => {
        if(!trip?.candidates?.length){
           return <p>Não tem candidatos para essa viagem</p> 
        }
        
        return trip?.candidates?.map((candidate) => {
            return (
                <Container key={candidate.id}>
                    <p>
                        <strong>Nome: </strong>
                        {candidate.name}
                    </p>
                    <p>
                        <strong>Idade: </strong>
                        {candidate.age}
                    </p>
                    <p>
                        <strong>Profissão: </strong>
                        {candidate.profession}
                    </p>
                    <p>
                        <strong>País: </strong>
                        {candidate.country}
                    </p>
                    <p>
                        <strong>Texto de candidatura: </strong>
                        {candidate.applicationText}
                    </p>
                    <div className="d-flex justify-content-around p-2">
                        <Button variant="outline-success"  
                                onClick={() => handleCandidates(candidate.id,true)}>Aprovar</Button>
                        <Button variant="outline-dark"
                                onClick={() => handleCandidates(candidate.id,false)}>Reprovar</Button>
                    </div>
                    <hr />               
                </Container>
            )

        })
    }

    if (!trip){
        return <p>Carregando</p>
    }

    return (
        <Container className="d-flex justify-content-center" 
                    style={{ width: '35rem' }}>
           <Form>
                <div className="row justify-content-center mt-2 sticky-md-top">
                    <div className="d-flex justify-content-center p-2">
                        <h1 className="text-warning bg-dark">{trip.name}</h1>
                    </div>
                    <hr className="bg-success pb-0 mb-3"/>
                    <br />
                    <div className="d-flex justify-content-start p-1">                       
                        <p className="text-info bg-dark"><strong>Destino: </strong>{trip.planet}</p>
                    </div>
                    <div className="d-flex justify-content-start p-1">
                        <p className="text-info bg-dark"><strong>Descrição: </strong>{trip.description}</p>                       
                    </div>
                    <div className="d-flex justify-content-start p-1">
                        <p className="text-info bg-dark"><strong>Data: </strong>{trip.date}</p>                        
                    </div>
                    <div className="d-flex justify-content-start p-1">
                        <p className="text-info bg-dark"><strong>Duração: </strong>{trip.durationInDays} dias</p>                        
                    </div>              
                    <hr className="bg-success pb-0 mb-3"/>  

                    <div>
                        <div className="d-flex justify-content-center p-2">
                            <h3 className="text-warning bg-dark">Candidatos pendentes</h3>
                        </div>
                        <ListMatch>
                            {getCandidates()}
                        </ListMatch>           
                    </div>
                                    
                    <div>
                        <div className="d-flex justify-content-center p-2">
                            <h3 className="text-warning bg-dark">Candidatos aprovados</h3>
                        </div>
                        <ListMatch className="d-flex flex-column">
                            {renderizaCandidatosAprovados()}
                        </ListMatch>
                    </div> 
                    <Button className="row justify-content-center"
                            style={{ width: '5rem' }}
                            variant="secondary"
                            onClick={() => goToTripsPage()}>
                            Voltar
                    </Button> 
                </div>  
            </Form>
        </Container>

    
    )
}

export default TripDetailsPage
