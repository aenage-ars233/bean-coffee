import styled from "styled-components";
import Button from "../../ui/button/button";

import background from "../../../assets/bg-hero.png";

export const StyledHero = styled.section`
  background-color: #442808;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 0 0;
  padding: 183px 746px 47px 93px;
`;

export const ContentWrapper = styled.div`
  width: 527px;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  font-family: "Clicker Script";
  font-size: 220px;
  font-weight: 400;
  color: ${(props) => props.theme.whiteTextColor};
`;

export const StyledButton = styled(Button)`
  margin-top: 15px;
`;