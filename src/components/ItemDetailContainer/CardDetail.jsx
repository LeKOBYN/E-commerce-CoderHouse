import React from 'react'
import styled from "styled-components";

export default function CardDetail(props) {
  return (
    <>
      <Card>
          <Image  src={props.img} alt={props.title} />
          <h2>{props.title}</h2>
          <h3>${props.price}</h3>
          <p>{props.detail}</p> 
      </Card>
    </>
  )
}
const Image=styled.img`
    width:100%;
    border-radius: 3px;
    border: 15px outset #a50202; 
`
const Card=styled.div`
    color:black;
    width:50%;
    padding: 1.5rem;
    text-align: center;
    margin: 2rem 0;
    transition: 0.3s;
    cursor: pointer;
    
`
