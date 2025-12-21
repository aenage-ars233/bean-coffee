import React from "react";
import Container from "../../layout/container/container";
import Title from "../../ui/title/title";
import Text from "../../ui/text/text";
import Card from "../../ui/card/card";
import Icon from "../../ui/icon/icon";
import Button from "../../ui/button/button";
import { StyledSection, StyledHeader, StyledTitle, FeaturesList, FeatureCard, CardTitle, StyledFooter, FooterTitle } from "./styles";

export default function Features({ features = [] }) {
  return (
    <Container>
      <StyledSection>
        <StyledHeader>
          <StyledTitle>Why are we different?</StyledTitle>
          <Text>We don’t just make your coffee, we make your day!</Text>
        </StyledHeader>
        <FeaturesList>
          {features.length && features.map((feature) => (
            <li key={feature.id}>
              <FeatureCard highlighted={feature.highlighted}>
                <Icon component={feature.icon} />
                <CardTitle as="h3" size={28}>{feature.title}</CardTitle>
                <Text>{feature.description}</Text>
              </FeatureCard>
            </li>
          ))}
        </FeaturesList>
        <StyledFooter>
          <Text>Great ideas start with great coffee, Lets help you achieve that</Text>
          <FooterTitle size={32} as="h3">Get started today.</FooterTitle>
          <Button>Join Us</Button>
        </StyledFooter>
      </StyledSection>
    </Container>
  );
}