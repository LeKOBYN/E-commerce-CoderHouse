import React from 'react'
import styled from "styled-components";

function Button(props) {
  return (
    <Boton>{props.title}</Boton>
  )
}

const Boton=styled.button`
background-color: transparent;
  color:#3bd9;
  font-size:12px;
  font-weight: 400;
  width: 100%;
  text-transform: uppercase;
  border:2px solid #3bd9;
  
  height: 45px;
  margin-top: 1.2rem;
  border-radius: 32px;
  cursor: pointer;
  :hover{
    animation: pulsate 1s ease-in-out;
  }
  @keyframes pulsate {
    0%{
      box-shadow:
      0 0 25px #3bd9,
      0 0 50px #3bd
    }
  }
`

export default Button