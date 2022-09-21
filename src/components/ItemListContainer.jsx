import React from 'react'
import styled from 'styled-components'
export default function ItemListContainer(props) {
    
  return (
    
    <Greetings>{props.greeting}</Greetings> 
  )
}

const Greetings = styled.h2`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-style: bold;
    font-size: 50px;

`
