import React,{useState, useEffect} from 'react'
import { getOrderData } from "../../services/firebase";
import Button from '../Button/Button';
import styled from "styled-components";
import{Link, useParams} from "react-router-dom"

function Checkout() {
    const { orderID } = useParams();
    const [order, setOrder] = useState("");
    const [cart, setCart] = useState ([]);
    const [infoUser, setInfoUser] = useState([]);
    
    useEffect(() => {
        getOrderData(orderID)
          .then((data) => {
            setOrder(data);
            setCart(data.cart);
            setInfoUser(data.buyerData);
          })
        }, [orderID]);

  return (
    <MainContainer>
      <InfoContainer>
        <h2>Gracias por tu compra!</h2>
        <Information>Tu Numero de Pedido: <strong>{orderID}</strong></Information>
        <Information>Nombre: <strong>{infoUser.name}</strong></Information>
        <Information>Email: <strong>{infoUser.email}</strong></Information>
        <Information>Telefono: <strong>{infoUser.phone}</strong></Information>
        <Information> Total: <strong>{order.total}</strong></Information>
      </InfoContainer>
      {cart.map((item, index) => {
        return (
          <ItemInfo key={index}>
            <Imagen src={item.img} alt="img" />
            <Details>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
              <p>Precio : {item.price}</p>
              <p>Cantidad: {item.count} </p>
            </Details>
          </ItemInfo>
        );
      })}
      <Link to="/">
        <Button title="Inicio"/>
      </Link>
    </MainContainer>
  )
}
const MainContainer=styled.div`
    text-align:center;
`
const InfoContainer=styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(17, 13, 13, 0.8); 
    color: white;
    width: 700px;
    border-radius: 15px;
    margin:auto;
    text-align: center;
    gap: 10px;
`
const Information = styled.p`
    margin: 0 ;

`
const ItemInfo=styled.div`
    display: flex;
    text-align: center;
    border: 1px solid black;
    width: 700px; 
    height: 250px;
    background-color: rgba(17, 13, 13, 0.8); 
    color: white;
    border-radius: 15px;
    margin: 1rem auto;

`
const Details=styled.div`
    margin:auto;
    text-align:left;
`
const Imagen=styled.img`
    text-decoration:none;
    border-radius: 15px;
`

export default Checkout