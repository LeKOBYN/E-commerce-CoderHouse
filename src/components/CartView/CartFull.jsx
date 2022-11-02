import React,{useContext} from 'react'
import styled from "styled-components";
import {cartContext} from '../../context/CartContext'
function CartFull() {
  const {cart,removeItem}=useContext(cartContext);


  return (
    <>
    {
        cart.map(item=>
            (
              
            <Item key={item.id}>
              <Image src={item.img} alt={item.title} />
              <Container>
                <div style={{display:'flex',alignItems:'baseline',minWidth: '300px'}}>
                  <Title style={{width:'130px'}}>{item.title}</Title>
                  <i onClick={()=>removeItem(item.id)} style={{color:'red',cursor:'pointer'}} className="bi bi-trash3-fill"></i>
                </div>
                <div>
                  <h3>{item.count} x {item.price}</h3>
                </div>
              </Container>
            </Item>
           )
          )
    }
    </>
  )
}
const Item=styled.div`
width: 80%;
border:1px solid transparent;
display: flex;
margin:0 auto;
:hover{
  border:1px solid gray;
}
`
const Container=styled.div`

@media (max-width:360px) {
  font-size:.7rem;
}
@media (max-width:460px) {
  font-size:.8rem;
}
`
const Title=styled.h2`
font-size: 20px;
@media (max-width:360px) {
  font-size:.7rem;
}
@media (max-width:460px) {
  font-size: 1rem;
}
`
const Image=styled.img`
width: 130px;
@media (max-width:460px) {
  width: 90px;
  height: 90px;
}
@media (max-width:360px) {
  width: 80px;
  height: 80px;
}
`

export default CartFull