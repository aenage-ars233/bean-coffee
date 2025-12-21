import React from "react";
import Container from "../../layout/container/container";
import Button from "../../ui/button/button";
import { StyledSection, ContentWrapper, StyledTitle, StyledText } from "./styles";

export default function Benefits() {
  return (
    <Container>
      <StyledSection>
        <ContentWrapper>
          <StyledTitle color="white">Get a chance to have an Amazing morning</StyledTitle>
          <StyledText color="white">We are giving you are one time opportunity to experience a better life with coffee.</StyledText>
          <Button>Order Now</Button>
        </ContentWrapper>
      </StyledSection>
    </Container>
  );
}