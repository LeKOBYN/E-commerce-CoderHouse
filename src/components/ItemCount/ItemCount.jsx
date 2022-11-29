import React, { useState} from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'


export default function ItemCount(props) {
  const [productCount,setProductCount] =useState(1);
function handleSubstract(){
  if(productCount>1) {
    setProductCount(productCount-1);
  }
}
function handleAdd(){
  if(productCount<props.stock){
    setProductCount(productCount+1);
  }
}

  return (
    <ContainerItemCount>
      <p>Stock disponible: {props.stock}</p>
        <ContainerBtnItemCount>
            <CountBtn onClick={handleSubstract}>-</CountBtn>
            <strong>{productCount}</strong>
            <CountBtn onClick={handleAdd}>+</CountBtn>
        </ContainerBtnItemCount>

      <div onClick={()=>{props.OnAdd(productCount)}}>
      <Button title='Agregar al carrito'/>
      </div>
    </ContainerItemCount>
  )
}


const ContainerItemCount=styled.div`
  display: block;
  flex-direction: column;
  margin:0 0 0 4rem;
`

const ContainerBtnItemCount=styled.div`
margin: 0 auto;
border-radius: 3px;
border: 1px solid #0f0e0e; 
width: 150px;
display: flex;
justify-content: space-between;
align-items: center;

`
const CountBtn=styled.button`
color: white;
background-color: black;
border:none;
border-radius:3px;
font-size: 2rem;
transition:0.3s;
width: 41px;
cursor: pointer;

:hover{
  background-color: #7e7e83;  
}
`
/*const AgregarBtn=styled.button`

  width: 140px;
  height: 45px;
  margin-left: 5px;
  margin-top: 1.2rem;
  border-radius: 10px;
`*/

