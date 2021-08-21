import React , { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const CreateTripPage = () => {
    //Router ===============================
    const history = useHistory() 
    const goToAdminHomePage = () => {
        history.push("/admin/trips/list")
    }
    //=======================================
    
    //criacao de variaveis======================
    const [nome, setNome] = useState("")
    const [planeta, setPlaneta] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [desc, setDesc] = useState("")
    const [duracao, setDuracao] = useState(0)
    //===========================================

    //Inputs controlados ========================
    const mudaNome = (e) => {
        setNome(e.target.value)
    }
    const mudaPlaneta = (e) => {
        setPlaneta(e.target.value)
    }
    const mudaData = (e) => {
        setDueDate(e.target.value)
    }
    const mudaDesc = (e) => {
        setDesc(e.target.value)
    }
    const mudaDuracao = (e) => {
        setDuracao(e.target.value)
    }
    //===========================================
    //Criar viagem
    const createTrip = () =>{
        const aluno = "rommel-rios-lovelace"
        const token = localStorage.getItem('token')
        const body = {
            name: nome,
            planet: planeta,
            date: dueDate,
            description: desc,
            durationInDays: duracao
        }

        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`, body ,{
            headers:{
                auth:token
            }
        })
        .then ((res) =>{
            alert("usuario criado com succeso")
            setNome("")
            setPlaneta("")
            setDueDate("")
            setDesc("")
            setDuracao("")
        })
        .catch((err) => {
            console.log(err)
            setNome("")
            setPlaneta("")
            setDueDate("")
            setDesc("")
            setDuracao("")
        })
    }

    return (
        <Container className="position-absolute top-50 start-50 translate-middle"
                   style={{ width: '40rem' }}>
            <div className="row justify-content-center mt-4">
                <Form>
                    <div className="d-flex justify-content-center p-2">
                        <h1>Criar Viagem</h1>
                    </div>
                    <div className="form-floating mb-3">
                        <input  className="form-control" 
                                id="floatingInput" 
                                placeholder="Nome"
                                value={nome}
                                onChange={mudaNome}/>
                        <label htmlFor="floatingInput">Nome</label>
                    </div>
                    <Form.Select aria-label="Default select example" 
                                 className="mb-3"
                                 value={planeta}
                                 onChange={mudaPlaneta}>
                        <option>Escolha um planeta</option>
                        <option value="Mercúrio">Mercúrio</option>
                        <option value="Vênus">Vênus</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Neptuno">Neptuno</option>
                        <option value="Plutão">Plutão</option>
                    </Form.Select>
                    <div className='input-group mb-3' id='datetimepicker'>
                        <input type='date'                                
                               value={dueDate}
                               onChange={mudaData}
                               className="form-control" />
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" 
                                id="floatingInput" 
                                placeholder="Descrição"
                                value={desc}
                                onChange={mudaDesc}/>
                        <label htmlFor="floatingPassword">Descrição</label>
                    </div>
                    <div className="input-group mb-3">
                        <input className="form-control"               
                                id="floatingInput" 
                                type="number"
                                aria-label="Amount (to the nearest Real)"
                                placeholder="Duração em dias"
                                min="50"
                                value={duracao}
                                onChange={mudaDuracao}/>
                    </div>
                    <div className="d-flex justify-content-center p-2">
                        <button type="button" 
                                className="btn btn-dark me-2"
                                onClick={goToAdminHomePage}>Voltar</button>
                        <button type="button" 
                                className="btn btn-success ms-2"
                                onClick={()=>createTrip()}>Criar</button>
                    </div>
                </Form> 
            </div> 
        </Container>
    )
}

export default CreateTripPage
