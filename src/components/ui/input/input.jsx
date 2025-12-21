import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font: inherit;
  font-size: 20px;
  border: none;
  padding: 16px 26px;
  background-color: #FFF9F1;
  border-radius: 4px;
  color: black;

  &::placeholder {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

export default Input;

