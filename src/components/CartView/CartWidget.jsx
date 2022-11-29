import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import {cartContext} from "../../context/CartContext"
import{Link} from "react-router-dom"

export default function CartWidget(){
    const {getTotalItemCount}=useContext(cartContext);
    

    return(
        <>
        <div >
            <Link to="/cart">
                
                <Carrito>
                    
                    <Imagen
                    src="https://img.icons8.com/glyph-neue/64/FA5252/clear-shopping-cart.png" alt="carrito"
                    />
                
                <CartCount><span>{getTotalItemCount() > 0 && getTotalItemCount()}</span></CartCount>{/**/} 
                </Carrito>
            
            </Link>
        </div>    
        </>
    );
}
const Imagen=styled.img`
    text-decoration: none;
    width: 32px;
`

const Carrito=styled.div`
    width: 2rem;
    padding: 0 2rem;
    height: 30px;    
`
const CartCount = styled.div`
    text-decoration: none;
    font-weight: 700;
    color:rgb(226, 77, 58);
`