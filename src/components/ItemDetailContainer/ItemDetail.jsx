import styled from "styled-components";
import {useState,useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import {cartContext} from "../../context/CartContext";
import {Link} from 'react-router-dom';
import Button from '../Button/Button';

export default function ItemDetail({item}) {
  const [count,setCount] =useState(0);
  const {addToCart}=useContext(cartContext);


  function handleOnAdd(count){
    addToCart(item,count);
    setCount(count);
  }
  return (
    <>
      
      <ContainerCardDetail>
      <Card>
        {/*<ImageContainer>*/}
          <Image  src={item.img} alt={item.title} />
          {/*</ImageContainer>*/}  
          <h2>{item.title}</h2>
          <h3>${item.price}</h3>
          <p>{item.detail}</p> 
      </Card>
      {count===0 ?
      <ItemCount OnAdd={handleOnAdd} stock={item.stock}/>
      :
      <Link to='/cart'> <Button title='Ver Carrito'></Button></Link>
      }
    </ContainerCardDetail>
    </>
  )
}
const Image=styled.img`
    width:350px;
    border-radius: 3px;
    border: 15px outset #a50202;
    margin: 0 auto;
`
const Card=styled.div`
    color:black;
    font-weight:bold;
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
    margin: 5rem auto auto auto ;
    //margin-top: 5rem;
    border-radius: 25px outset #a50202; 
`
