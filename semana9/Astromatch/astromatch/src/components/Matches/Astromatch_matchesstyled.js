import styled from 'styled-components'

export const BoxInicial = styled.div`
    display: flex;
    width: 130vh;
    margin: 0 auto;
    min-height: 70vh;
    justify-content: center;
    padding: 80px 0;
    overflow: auto; 
`
export const Box = styled.section`
    background-color: #fff;
    width: 35%;
    min-height: 600px;
    overflow: hidden;
    padding: 2em;
    display: flex;
    flex-direction: column; 
    box-shadow : 0 0 40px -5px rgb(0,0,0, .5);
    overflow: auto; 
`

export const Header = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 10px;    
`

export const Figure = styled.figure`
    height: 70%
`

export const IMG = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;  
    margin-right: 20px;
    position: relative;
    object-fit: cover;
    box-shadow : 0 0 30px -5px rgb(0,0,0, .5);
`

export const Footer = styled.div`
    display: flex;
    padding: 15px 15px;
    margin-top: 1em;
    justify-content: flex-end;
    margin-top: auto;
`
export const ListMatch = styled.div`
    display: flex;   
    padding: 10px 20px;
    align-items: center;
    overflow: auto;  
    

`
export const Button = styled.i`
    cursor: pointer;    
`
