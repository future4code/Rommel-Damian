import React , { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Box, BoxInicial, Figure, IMG, Footer, Header, Button } from './Astromatch_inicialstyled'

const Astromatch_Inicial = (props) => {

    const [pessoa , setPessoa] = useState({})
    const aluno = 'rommel-rios-Lovelace'

    useEffect(() => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
        .then(response => {
            // console.log(response.data.profile)
            setPessoa(response.data.profile)
        })
        .catch(err => {
            console.log(err)
        })        
    }, [])


    const getProfileToChoose = async () => {
       try {
             const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
             setPessoa(res.data.profile)
            //console.log(res.data.profile)

       } catch (err) {
            //console.log(err)
           alert("Ocorreu un problema")
       }
   } 


   const choosePerson = async (objectId) => {
        const body = {
            id: objectId,
            choice: true
        }

        try {            
            const res =
               await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
            //console.log("Res",res)

        } catch (err) {
            alert("Ocorreu um problema")
            // console.log(err)            
        }
    }

    const choosePersonReject = async (objectId) => {
        const body = {
            id: objectId,
            choice: false
        }

        try {            
            const res =
               await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
            //    console.log("Res",res)

        } catch (err) {
            alert("Ocorreu um problema")
            // console.log(err)            
        }
    }

    return (
        <div>
           <BoxInicial>
                <Box>
                    <Header>
                        <h1>astromatch</h1> 
                        <Button className="fas fa-user-check fa-3x" onClick={() => props.mudarPagina("Matches")}></Button> 
                    </Header> 
                    <hr />
                    <br />
                    <div>
                        <Figure>
                            <IMG src={pessoa.photo} alt={pessoa.name}/>
                        </Figure>
                        <br />                        
                        <h3><strong>{pessoa.name}</strong>, {pessoa.age} </h3>
                        <p>{pessoa.bio}</p>                   
                    </div>
                    <Footer>
                       <Button className="far fa-times-circle fa-5x" alt="Rejeita" onClick={() => {
                                                                                        choosePersonReject(pessoa.id)
                                                                                        getProfileToChoose()}}></Button>
                       
                       <Button className="fab fa-gratipay fa-5x" alt="Aceita" onClick={() =>{ 
                                                                                        choosePerson(pessoa.id)
                                                                                        getProfileToChoose()}}></Button>
                    </Footer>            
                </Box>
            </BoxInicial> 
            
        </div>
    )
}

export default Astromatch_Inicial
