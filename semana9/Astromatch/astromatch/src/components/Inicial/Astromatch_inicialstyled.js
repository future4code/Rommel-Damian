import styled from 'styled-components'


export const BoxInicial = styled.div`
    display: flex;
    width: 130vh;
    margin: 0 auto;
    min-height: 70vh;
    justify-content: center;
    padding: 80px 0;
`
export const Box = styled.section`
    background-color: #fff;
    width: 35%;
    min-height: 600px;
    overflow: hidden;
    padding: 2em;
    display: flex;
    flex-direction: column; 
    box-shadow : 0 0 20px -5px rgb(0,0,0, .5);
`

export const Header = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 10px;    
`

export const Figure = styled.figure`
    height: 70%;
    
`

export const IMG = styled.img`
    width: 90%;
    height: 100%;
    display: block;
    margin: 0 auto;
    object-fit: cover;
    box-shadow : 0 0 40px -5px rgb(0,0,0, .5);
`

export const Footer = styled.div`
    display: flex;
    padding: 15px 30px;
    margin-top: 1em;
    justify-content: space-between;
    margin-top: auto;
`
export const Button = styled.i`
    cursor: pointer;
    
`

export const Spinner = styled.div`   
    border: 4px solid rgba(0,0,0, .1);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-left-color: #09f;
    margin-top: 5em;
    margin-left: 7em;
    
    

    animation: spin 1s ease infinite;
    
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg)
        }
    }

`






