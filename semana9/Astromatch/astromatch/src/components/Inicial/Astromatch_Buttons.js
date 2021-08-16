import React from 'react'
import { Footer, Button } from './Astromatch_inicialstyled'

const Astromatch_Buttons = (props) => {
    return (
        <Footer>
            <Button  className="far fa-times-circle fa-5x" alt="Rejeita" onClick={props.onClickNo}></Button>                       
            <Button className="fab fa-gratipay fa-5x" alt="Aceita" onClick={props.onClickYes}></Button>
        </Footer>
    )
}
export default Astromatch_Buttons
