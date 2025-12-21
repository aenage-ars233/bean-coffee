import React from "react";
import Container from "../../layout/container/container";
import Text from "../../ui/text/text";
import { StyledHero, ContentWrapper, StyledTitle, StyledButton } from "./styles";

export default function Hero() {
  return (
    <Container>
      <StyledHero>
        <ContentWrapper>
          <Text size={22} color="white" weight={500}>We’ve got your morning covered with</Text>
          <StyledTitle>Coffee</StyledTitle>
          <Text color="white">It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have.
          We provide the best for our customers.</Text>
          <StyledButton>Order Now</StyledButton>
        </ContentWrapper>
      </StyledHero>
    </Container>
  );
}