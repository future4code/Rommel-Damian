import React from 'react'
// import './CardPequeno.css'
import styled from 'styled-components';

const LittlecardContainer = styled.div`

    box-sizing: border-box;

section{
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 5px 30px;
    height: 50px; 
    margin-bottom: 20px;
}

img{
    width: 40px;
    margin-right: 5px;
    border-radius: 50%;  
}
`;

const CardPequeno = (props) =>{
    return(
        <LittlecardContainer>
          <section>  
            <img src={props.imagemEmail} />
            <p><strong>Email: </strong>{props.email}</p>
          </section>

          <section>   
            <img src={props.imagemEndereco} />
            <p><strong>Endereço: </strong>{props.endereco}</p>
          </section>
        </LittlecardContainer>
             
     )
}

export default CardPequeno;