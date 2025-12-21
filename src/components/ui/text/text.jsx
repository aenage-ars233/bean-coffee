import React from "react";
import styled from "styled-components";

const Text = styled.p`
  margin: 0;
  font-family: "Playfair Display";
  font-size: ${(props) => props.size || 20}px;
  color: ${(props) => props.color};
  line-height: 34px;
  font-weight: ${(props) => props.weight || 400};
  letter-spacing: 0.5px;
`;

export default Text;