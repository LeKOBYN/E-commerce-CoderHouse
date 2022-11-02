import React from 'react'
import styled from "styled-components";
import ItemCount from '../ItemCount/ItemCount';
import { cartContext } from '../../context/CartContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

function ItemDetail({ props }) {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(cartContext);
  
function handleOnAdd(count){
  addToCart(props,count);
  setCount(count);
}
  return (
    <>
    <ContainerCardDetail>
      <Card>
          <Image  src={props.img} alt={props.title} />
          <h2>{props.title}</h2>
          <h3>${props.price}</h3>
          <p>{props.detail}</p> 
      </Card>
      {count===0 ?
      <ItemCount OnAdd={handleOnAdd} stock={props.stock}/>
      :
      <Link to='/cart'> Ver Carrito </Link>
      }
    </ContainerCardDetail>
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
const ContainerCardDetail=styled.div`
    width: 60%;
    height: 600px;
    background-color: #832f2f;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 5rem;
`
export default ItemDetail