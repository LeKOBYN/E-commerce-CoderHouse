import React from 'react'
import styled from "styled-components";
import{Link} from "react-router-dom"

export default function Card(props) {
  return (
    <>
    <Link to={`/curso/${props.id}`} style={{textDecoration:"none"}}>
      <Cards>
          <Image  src={props.img} alt={props.title} />
          <h2>{props.title}</h2>
          <h3>${props.price}</h3>
          <p>{props.detail}</p>
          <Comprar>Comprar</Comprar>
      </Cards>
    </Link>
    </>
  )
}
const Cards=styled.div`
    background-color: #d12b2b;
    color:black;
    width:250px;
    padding: 1.5rem;
    border: solid 5px black;
    text-align: center;
    margin: 2rem 0;
    transition: 0.3s;
    cursor: pointer;
    :hover{
        transform: scale(1.10);
        .Comprar{
          display: block;
        }
    }
`
const Image=styled.img`
    width:100%;
`
const Comprar=styled.div`
  width: 100%;
  background-color: black;
  color: white;
  height: 50px;
  display:flex;
  align-items: center;
  justify-content: center;


`