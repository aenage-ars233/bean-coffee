import React, { useState } from "react";
import Container from "../../layout/container/container";
import Text from "../../ui/text/text";
import Button from "../../ui/button/button";
import { StyledSection, StyledHeader, StyledTitle, CTAForm, StyledInput } from "./styles";

export default function CTA() {
  const [value, setValue] = useState("");

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <Container>
      <StyledSection>
        <StyledHeader>
          <StyledTitle color="white">Subscribe to get the Latest News</StyledTitle>
          <Text color="white">Don’t miss out on our latest news, updates, tips and special offers</Text>
        </StyledHeader>
        <CTAForm method="post" action="#" onSubmit={handleOnSubmit}>
          <StyledInput value={value} type="email" name="email" placeholder="Enter your email" onChange={(evt) => setValue(evt.target.value)} />
          <Button variant="third" type="submit">Suscribe</Button>
        </CTAForm>
      </StyledSection>
    </Container>
  );
}