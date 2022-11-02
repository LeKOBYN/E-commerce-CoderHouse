import React,{useContext} from 'react'
import {cartContext} from '../../context/CartContext'
import Button from '../Button/Button';
import styled from "styled-components";
import{Link} from "react-router-dom"
function Checkout() {
    const {buyId}=useContext(cartContext);
  return (
    <>
        <Container>
            <ImagenGracias>
                
            </ImagenGracias>
            <h1>Su codigo de compra es :{buyId}</h1>
            <Link to='/'>
                <Button title='volver al inicio'></Button>
            </Link>
        </Container>
    </>
  )
}
const Container=styled.div`
    width: 50%;
    margin:0 auto;
    
`
const ImagenGracias=styled.div`
margin: 0 auto;
    background-image: url(https://play-lh.googleusercontent.com/fdVU261WY3lbwkqF_zgrvcYquIxpTPCTwotlv2azu6__eEiwUaCqtE-2xMmei_o17x8);
    width: 500px;
    height: 500px;
    background-position: center;

`
export default Checkout