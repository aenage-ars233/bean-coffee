import React from "react";
import Container from "../container/container";
import Logo from "../../ui/logo/logo";
import Navigation from "../navigation/navigation";
import Button from "../../ui/button/button";
import { StyledHeader, Wrapper, HeaderActions } from "./styles";

export default function Header() {
  return (
    <Container>
      <StyledHeader>
        <Wrapper>
          <Logo size={35} />
          <Navigation />
          <HeaderActions>
            <Button variant="secondary">Sign In</Button>
            <Button $fontSize={14}>Sign Up</Button>
          </HeaderActions>
        </Wrapper>
      </StyledHeader>
    </Container>
  );
}