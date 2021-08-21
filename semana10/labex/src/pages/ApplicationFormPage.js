import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { useRequestData } from "./../hooks/useRequestData";
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const ApplicationFormPage = () => {

    //==============Troca tela=========================    
    const history = useHistory()
    const goToListPage = () => {
        history.push("/trips/list")
    }
    //=============Chama ao custom hook para obter dados do api de paises===========
    const [country] = useRequestData("https://restcountries.eu/rest/v2/all")
    //==============================================================================
    //===Crio variaveis de estado pra armazenar neles a info dos paises=============
    const [countrySelect , setCountrySelect] = useState("")
    const [trip, setTrip] = useState([]) 
    //criacao de variaveis======================
    const [IdtituloEscolhido, setIdTituloEscolhido] = useState("")
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [texto, setTexto] = useState("")
    const [profissao, setProfissao] = useState("")   
    //==============================================================================
    //==crio metodo para fazer un select controlado e saber o que estou escolhendo==
    const changeCountry = (event) => {
        // console.log(countrySelect)
        setCountrySelect(event.target.value)       
    }
    const changeIdTitulo = (event) => {
        // console.log(IdtituloEscolhido)
        setIdTituloEscolhido(event.target.value)
    }     
    const changeNome = (event) => {
        setNome(event.target.value)
    }
    const changeIdade = (event) => {
        setIdade(event.target.value)
    }    
    const changeTexto = (event) => {
        setTexto(event.target.value)
    }    
    const changeProfissao = (event) => {
        setProfissao(event.target.value)
    }

    //=============================================================================
    useEffect(() => {
        getTrips()        
    }, []);
    
    const getTrips =  () => {
        const aluno = "rommel-rios-lovelace" 
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
        .then((res) => {
             setTrip(res.data.trips)                       
             //   console.log(trip)
            // console.log(res.data.trips)
        })
        .catch((err) => {
            console.log(err.data)
        })
    }

    const createApplication = () => {
        const aluno = "rommel-rios-lovelace"
        
        const body = {
            name: nome,
            age: idade,
            applicationText: texto,
            profession: profissao,
            country: countrySelect
        }

        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${IdtituloEscolhido}/apply`, body)
            .then((res) => {
                alert("Candidato cadastrado com succeso")
                setNome("")
                setIdade("")
                setTexto("")
                setProfissao("")
                setCountrySelect("")
            })
            .catch((err) => {
                alert("Ocorreu algum problema")
                setNome("")
                setIdade("")
                setTexto("")
                setProfissao("")
                setCountrySelect("")
            })
    }
   
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="row justify-content-center mt-4">
                <div className="col-md-12">
                    <h2>Inscreva-se para uma viagem</h2>
                    <hr className="bg-success pb-0 mb-3"/>
                    <form action="">
                        <div className="form-floating mb-3">
                            <input className="form-control" 
                                    id="floatingInput" 
                                    placeholder="Nome do candidato"
                                    onChange={changeNome}/>
                            <label htmlFor="floatingInput">Nome do candidato</label>
                        </div>
                        
                        <div className="input-group mb-3">
                            <input className="form-control"               
                                    id="floatingInput" 
                                    type="number"
                                    aria-label="Amount (to the nearest Real)"
                                    placeholder="Idade"
                                    onChange={changeIdade}/>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control" 
                                    id="floatingInput" 
                                    placeholder="Texto de Candidatura"
                                    onChange={changeTexto}/>
                            <label htmlFor="floatingPassword">Texto de Candidatura</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input  className="form-control" 
                                    id="floatingInput" 
                                    placeholder="Título"
                                    onChange={changeProfissao}/>
                            <label htmlFor="floatingInput">Profissão</label>
                        </div>
                        <div className="form mb-3">
                            <Form.Select  aria-label="Default select example"
                                placeholder="Escolha uma País"
                                onChange={changeCountry}>
                                <option defaultValue>Escolha uma País</option>     
                                {country && country.map(item => {
                                    return (                                    
                                        <option key={item.name} value={item.name}>
                                            {item.name}
                                        </option>                                        
                                    );
                                })}
                            </Form.Select>   
                        </div>

                        <div className="nput-group mb-3">
                        <Form.Select  aria-label="Default select example"
                                placeholder="Escolha uma País"
                                onChange={changeIdTitulo}>
                                <option defaultValue>Escolha uma viagem</option>    
                                {trip && trip.map(item => {
                                    return (                              
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>                                        
                                    
                                    );
                                    
                                })}
                            </Form.Select>  
                        </div>         
                  
                        <div className="d-flex justify-content-center p-2">
                        <button type="button" 
                                className="btn btn-dark me-2"
                                onClick={goToListPage}>Voltar</button>
                        <button type="button" 
                                className="btn btn-success ms-2"
                                onClick={() => createApplication()}>Enviar</button>
                        </div>                     
                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApplicationFormPage
