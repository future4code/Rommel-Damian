import React from 'react'
import {useState, useEffect} from 'react'

const HomePage = () => {
    return (
        <div className="container position-absolute top-50 start-50 translate-middle">
            <div className="row">
                <div className="d-flex justify-content-center p-2">
                    <h1>Labex</h1>
                </div>
                <div className="d-flex justify-content-center p-2">
                    <button type="button" className="btn btn-dark me-2">Ver Viagens</button>           
                    <button type="button" className="btn btn-dark ms-2">Área de Admin</button>            
                </div>           
            </div>     
        </div>
    )
}

export default HomePage
