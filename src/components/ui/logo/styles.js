import styled from "styled-components";

export const StyledLogo = styled.div`
  color: ${(props) => props.theme.whiteTextColor};
  font-family: "Clicker Script";
  font-size: ${(props) => props.size}px;
`;