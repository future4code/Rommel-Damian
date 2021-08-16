import React , { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, BoxInicial, Figure, IMG, Spinner, Header, Button } from './Astromatch_inicialstyled'
import TinderCard from 'react-tinder-card'
import Astromatch_Buttons from './Astromatch_Buttons'

const Astromatch_Inicial = (props) => {

    const [pessoa , setPessoa] = useState(undefined)
    const aluno = 'rommel-rios-Lovelace'

   // TINDER CART =================================

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
    
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

   // =============================================

    useEffect(() => {
        // axios
        // .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
        // .then(response => {
        //     console.log(response.data.profile)
        //     setPessoa(response.data.profile)
        // })
        // .catch(err => {
        //     console.log(err)
        // })      
        getProfileToChoose()  
    }, [])


    const getProfileToChoose = async () => {
       try {
             const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
             setPessoa(res.data.profile)
             console.log(res.data.profile)

       } catch (err) {
            //console.log(err)
           alert("Ocorreu un problema")
       }
   } 


   const choosePerson = (choice) => {
        const body = {
            id: pessoa.id,
            choice: choice
        }
        setPessoa(undefined)            
            axios
                .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
                .then((res)=>{
                    console.log("Res",res)
                    getProfileToChoose()
                })
    }

    const onClickNo = () => {
        choosePerson(false);
      };
    
    const onClickYes = () => {
        choosePerson(true);
      };

    
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
                    {pessoa ? (
                    <>
                    <TinderCard className="swipe" preventSwipe={['up', 'down']} key={pessoa.id}>
                            <Figure>
                                <IMG src={pessoa.photo} alt={pessoa.name} />
                            </Figure>
                            <br />
                            <h3><strong>{pessoa.name}</strong>, {pessoa.age} </h3>
                            <p>{pessoa.bio}</p>
                    </TinderCard>
                    <Astromatch_Buttons onClickNo={onClickNo} onClickYes={onClickYes} />
                    </> ) : (
                    <Spinner></Spinner>
                    )}

                    

                    
                </Box>
            </BoxInicial> 
        </div>
    )
}

export default Astromatch_Inicial
