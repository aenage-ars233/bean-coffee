import React from "react";
import Container from "../../layout/container/container";
import Text from "../../ui/text/text";
import { StyledDiscover, ContentWrapper, StyledTitle, StyledButton } from "./styles";

export default function Discover() {
  return (
    <Container>
      <StyledDiscover>
        <ContentWrapper>
          <StyledTitle>Discover the best coffee</StyledTitle>
          <Text>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity
          and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. 
          There is no doubt that you will enjoy this coffee more than others you have ever tasted.</Text>
          <StyledButton>Learn More</StyledButton>
        </ContentWrapper>
      </StyledDiscover>
    </Container>
  );
}
