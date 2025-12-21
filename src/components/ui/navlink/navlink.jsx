import styled from "styled-components";

const NavLink = styled.a`
  color: ${(props) => props.theme.whiteTextColor};
  font-size: 14px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export default NavLink;