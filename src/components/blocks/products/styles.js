import styled from "styled-components";
import Card from "../../ui/card/card";
import Button from "../../ui/button/button";

export const StyledSection = styled.section`
  margin-bottom: 112px;
  padding-left: 88px;
  padding-right: 88px;
`;

export const StyledHeader = styled.header`
  width: 980px;
  margin: 0 auto;
  margin-bottom: 32px;
  text-align: center;
`;

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const StyledCard = styled(Card)`
  position: relative;
`;

export const CardContent = styled.div`
  padding-top: 14px;
  padding-bottom: 32px;
  text-align: center;
`;

export const Price = styled.b`
  display: block;
  margin-bottom: 18px;
  color: #583307ff;
  font-weight: 700;
  font-size: 18px;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 355px;
  left: 73px;
`;