import React from 'react'
import styled from 'styled-components'
export default function CartWidget() {
  return (
    <a href="."><Carrito className="CartWidget" src="https://img.icons8.com/glyph-neue/64/FA5252/clear-shopping-cart.png"/></a>

  )
}

const Carrito = styled.img`
    padding-left: 60px; 
`