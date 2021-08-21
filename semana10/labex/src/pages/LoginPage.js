import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

 const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const aluno = "rommel-rios-lovelace"
   
    //Router================================
    const history = useHistory()
    const goToHomePage = () => {
        history.push("/")
    }
    // const goToAdminTripList = () => {
    //     history.push("/admin/trips/list")
    // }
    //======================================

    //Input Controlado=====================
    const mudaInputEmail = (e) => {
        setEmail(e.target.value)
    }

    const mudaInputSenha = (e) => {
        setPassword(e.target.value)
    }
    
    const onSubmitLogin = () => {
        // console.log(email,password)
        const body = {
            email: email,
            password: password
        }
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`, body)
        .then ((res) => {
            // console.log("Deu Certo", res.data.token)
            localStorage.setItem('token', res.data.token)
            history.push("/admin/trips/list")
            
        })
        .catch ((err) => {
            console.log("Deu errado", err.data)
        })

    }

    //=====================================


    return (
        <Container className="position-absolute top-50 start-50 translate-middle">
            <Form>
                <div className="d-flex justify-content-center p-2">
                    <h1>Login</h1>
                </div>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control  type="email" 
                                   placeholder="name@example.com" 
                                   value={email}
                                   onChange={mudaInputEmail}
                                   />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                                  placeholder="Password"
                                  value={password}
                                  onChange={mudaInputSenha}
                                  />
                </Form.Group>

                <div className="d-flex justify-content-around p-2">
                    <Button variant="secondary" 
                            type="submit" 
                            onClick={goToHomePage}>
                        Voltar
                    </Button>

                    <Button variant="primary"                              
                            onClick={onSubmitLogin}>
                        Entrar
                    </Button>
                </div>               
            </Form>
        </Container>
    )
}

export default LoginPage
