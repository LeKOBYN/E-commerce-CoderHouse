import React from 'react'
import styled from "styled-components";
import{Link} from "react-router-dom"
import Button from '../Button/Button';

function CartEmpty() {
  return (
    <div style={{margin:'0 auto'}}>
        <Fondo>
            <h1>Podes mirar nuestras ofertas</h1>
            <Link to='/'><Button title='mirar ofertas'></Button></Link>
        </Fondo>
    </div>
  )
}

const Fondo=styled.div`
    background-image: url(https://www.procuer.com.ar/images/carritovacio.png);
    background-size:250px;
    background-repeat: no-repeat;
    background-position: center;
    width: 500px;
    height: 500px;
    margin: 0 auto;

`

export default CartEmpty