import React , { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, BoxInicial, Header ,Button, IMG, ListMatch, Footer } from './Astromatch_matchesstyled'


const Astromatch_Matches = (props) => {

    const [pessoaEscolhida, setPessoaEscolhida] = useState([])
    const aluno = 'rommel-rios-Lovelace'

    useEffect(() => {
       getMatches()
    }, [])

    const getMatches = async () => {
        try {
            const res = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
            // console.log(res.data.matches)
            setPessoaEscolhida(res.data.matches)           

      } catch (err) {
        //   console.log(err)
          alert("Ocorreu un problema")
      } 
    }

    const LimparMatches = async () => {

        try {            
            const res =
               await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`)
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
                        <Button className="fas fa-users fa-3x" onClick={() => props.mudarPagina("Inicial") }></Button>
                        <h1>Matches</h1>
                    </Header>
                    <hr />  
                    <br />   
                    <div>
                        {pessoaEscolhida ? (pessoaEscolhida.map(item => (
                                <ListMatch key={item.id}>
                                    <IMG src={item.photo}/>  
                                    <p>{item.name}</p>                                         
                                </ListMatch>
                        ))): <p>Carregando...</p> }
                    </div>  
                    <Footer>
                         <Button className="fas fa-trash-alt fa-3x" onClick={() => LimparMatches() }></Button>
                    </Footer>          
                </Box>  
            </BoxInicial>    
        </div>
    )
}

export default Astromatch_Matches
