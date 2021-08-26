import React from 'react'
import { useHistory } from 'react-router-dom'

const HomePage = () => {
    const history = useHistory()
    const goToTripsPage = () => {
        history.push("/trips/list")
    }    
    const goToLoginPage = () => {
        history.push("/Login")
    }

    const validateLogin = () => {
        const token = localStorage.getItem('token')

        if(token === null){
            history.push('/Login')
        }
        else {
            history.push('/admin/trips/list')
        }
    }


    return (
        <div className="container position-absolute top-50 start-50 translate-middle">
            <div className="row">
                <div className="d-flex justify-content-center p-2">
                    <h1>Labex</h1>
                </div>
                <div className="d-flex justify-content-center p-2">
                    <button type="button" 
                            className="btn btn-dark me-2"
                            onClick={goToTripsPage}>Ver Viagens</button>           
                    <button type="button" 
                            className="btn btn-dark ms-2"
                            onClick={() => validateLogin()}>Área de Admin</button>            
                </div>           
            </div>     
        </div>
    )
}

export default HomePage
