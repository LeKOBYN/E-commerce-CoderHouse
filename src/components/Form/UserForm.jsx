import React, { useState, useContext } from "react";
import { createBuyOrder } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import InputForm from "./InputForm";
import { cartContext } from "../../context/CartContext";
import Button from "../Button/Button";
import styled from "styled-components";
export default function UserForm() {
  const navigate = useNavigate();
  const { cart, getTotalPrice, clearCart } = useContext(cartContext);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    const orderData = {
      buyerData: userData,
      cart: cart,
      total: getTotalPrice(),
      date: new Date(),
    };
    clearCart();
    createBuyOrder(orderData).then((respuesta) => {
      Swal.fire({
        title: "Gracias!",
        text: "Gracias por tu compra",
        icon: "success",
        confirmButtonText: "God",
      }).then((result) => {
        navigate(`/Checkout/${respuesta}`);
      });
    });
  }

  return (
    <FormCont onSubmit={onSubmit}>
      <SubTitle>Ingrese sus datos!</SubTitle>
      <InputForm
        value={userData.name}
        title="Nombre"
        name="name"
        onChange={onInputChange}
      />
      <InputForm
        value={userData.email}
        title="Email"
        name="email"
        onChange={onInputChange}
      />
      <InputForm
        value={userData.phone}
        title="Teléfono"
        name="phone"
        onChange={onInputChange}
      />
      <Button type="submit" title="Crear orden"></Button>
    </FormCont>
  );
}

const FormCont = styled.form`
    width: 700px;
    background-color: rgba(17, 13, 13, 0.8);
    border-radius: 15px;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding: 10px;
`

const SubTitle = styled.h3`
margin: 0;
    color: white;
    font-size: 25px;
`

/*
const Boton=styled.button`

background-color: rgb(236, 94, 75);
    width: auto;
    height: 45px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1rem;
    :hover{
      background-color: rgb(61, 22, 12);
      color: white;
    }
`*/