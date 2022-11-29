import React from 'react'
import styled from "styled-components";

function Button(props) {
  return (
    <Boton>{props.title}</Boton>
  )
}

const Boton=styled.button`

background-color: rgb(236, 94, 75);
    width: auto;
    height: 45px;
    color: black;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 1rem;
    :hover{
      background-color: rgb(61, 22, 12);
      color: white;
    }
`

export default Button