import React from "react";
import styled from "styled-components";
function InputForm(props) {
  return (
    <InputCont>
      <Label className="label">{props.title}</Label>
      <Input
        className="input"
        required
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
`

const Label = styled.label `
    font-size: 20px;
    font-weight: bold;
    margin-right:10px ;
    color: white;
`

const Input = styled.input`
    border: none;
    border-radius: 5px;
    width: 150px;
    height: 20px;
    padding: 3px;
    margin: auto;
`