import React from "react";
import Container from "../../layout/container/container";
import Title from "../../ui/title/title";
import Text from "../../ui/text/text";
import { StyledSection, StyledHeader, ProductsList, StyledCard, CardContent, Price, StyledButton } from "./styles";

export default function Products({ products }) {
  return (
    <Container>
      <StyledSection>
        <StyledHeader>
          <Title>Enjoy a new blend of coffee style</Title>
          <Text>Explore all flavours of coffee with us. There is always a new cup worth experiencing</Text>
        </StyledHeader>
        <ProductsList>
          {products.map((product) => (
            <li key={product.id}>
              <StyledCard>
                <img src={product.image} alt={product.title} width={280} height={222} />
                <CardContent>
                  <Title as="h3" size={22}>{product.title}</Title>
                  <Text size={16} color="#1E1E1E">{product.description}</Text>
                  <Price>{product.price}</Price>
                  <StyledButton>Order Now</StyledButton>
                </CardContent>
              </StyledCard>
            </li>
          ))}
        </ProductsList>
      </StyledSection>
    </Container>
  );
}