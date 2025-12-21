import React from "react";
import { StyledButton } from "./styles";

export default function Button({ children, type = "button", link, variant, onClick, ...props }) {
  if (link) {
    return <StyledButton as="a" href={link} variant={variant} {...props}>{children}</StyledButton>
  }

  return <StyledButton type={type} variant={variant} onClick={onClick} {...props}>{children}</StyledButton>
}