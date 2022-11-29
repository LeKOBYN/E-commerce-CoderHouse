import React from "react";
import styled from "styled-components";

function InputForm(props) {
  return (
    <InputCont>
      <TitleLabel>{props.title}</TitleLabel>
      <Input  required
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </InputCont>
  );
}

export default InputForm;

const InputCont = styled.div`
    width: 500px;
    margin: auto;
    text-align:left;
`

const TitleLabel = styled.label`
    font-size: 20px;
    font-weight: bold;
    margin-right:10px ;
    color: #bb1f1f;
`

const Input = styled.input`
    display:flex;
    border: none;
    border-radius: 5px;
    width: 500px;
    height: 20px;
    padding: 3px;
`