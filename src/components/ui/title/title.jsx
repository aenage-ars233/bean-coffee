import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.color || "#583307ff"};
  font-size: ${(props) => props.size || 54}px;
  font-weight: 700;
`;

export default Title;