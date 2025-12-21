import styled from "styled-components";
import Title from "../../ui/title/title";
import Input from "../../ui/input/input";

import background from "../../../assets/bg-cta.png";

export const StyledSection = styled.section`
  padding: 80px 193px;
  background-color: #603809;
  background-image: url("${background}");
  background-repeat: no-repeat;
`;

export const StyledHeader = styled.header`
  width: 980px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 26px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 12px;
`;

export const CTAForm = styled.form`
  width: 642px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled(Input)`
  flex-grow: 1;
`;