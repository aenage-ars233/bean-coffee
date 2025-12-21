import styled from "styled-components";
import Title from "../../ui/title/title";
import Text from "../../ui/text/text";

import background from "../../../assets/bg-benefits.png";

export const StyledSection = styled.section`
  margin-bottom: 82px;
  padding: 135px 689px 135px 93px;
  background-color: #603809;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  width: 586px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 22px;
`;

export const StyledText = styled(Text)`
  margin-bottom: 22px;
`;