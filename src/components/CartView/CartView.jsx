import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import styled from "styled-components";
import UserForm from "../Form/UserForm";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
function Cart() {
  const { cart, removeItem, getTotalPrice } = useContext(cartContext);
  if (cart.length) {
    return (
      <div >
        {cart.length ? (
          cart.map((Item, index) => {
            return (
              <ContenedorItem key={index}>
                <ItemImage src={Item.img}  title={Item.title} alt="Producto"/>
                <CartInfo>
                  <h1 className="item-cart-desc">{Item.title}</h1>
                  <Info >
                    Precio Unitario: ${Item.price}
                  </Info>
                  <Info>Cantidad: {Item.count}</Info>
                  <Info> Precio Total: ${Item.price * Item.count} </Info>
                  <Delete title="Eliminar" onClick={() => removeItem(Item.id)}
                    src="https://img.icons8.com/fluency/96/delete-forever.png"
                    alt="delete"
                  />
                </CartInfo>
              </ContenedorItem>
            );
          })
        ) : (
          <h1>Su carrito esta vacio</h1>
        )}
        <PrecioCompra>
          Precio Total de la Compra: ${getTotalPrice()}
        </PrecioCompra>
        <div>
          <UserForm cart={cart} getTotalPrice={getTotalPrice} />
        </div>
      </div>
    );
  } else {
    return (
      <CartVacio>
        <h1>Agrege Productos al Carrito</h1>
        <Link to="/">
          <Button title='Inicio'/>
        </Link>
      </CartVacio>
    );
  }
}

export default Cart;

const Delete = styled.img`
 text-decoration:none;
 cursor: pointer;   
 width: 60px;
 margin: auto;
 `

const Info= styled.h4`
    margin:auto;
`

const ContenedorItem = styled.div`
    display: flex;
    justify-content: space-between;
    justify-items: center;
    border: 1px solid black;
    width: 800px; 
    height: 350px;
    text-align: center;
    background-color: rgba(17, 13, 13, 0.8); 
    color: white;
    border-radius: 15px;
    margin: 2rem auto;

`


const CartInfo = styled.div`
    text-align: center;
    width: 60% ;
    display: flex;
    flex-direction: column;
`

const ItemImage = styled.img`
    width: 50%;
    border-radius: 15px;

`

const PrecioCompra = styled.h2`
    text-align:center;
    border: 15px outset #a50202;
    color:white;
    background-color:black;
`

const CartVacio = styled.div`
    background-color: rgba(17, 13, 13, 0.8); 
    color: white;
    width: 500px;
    border-radius: 15px;
    text-align: center;
    margin: auto;
`