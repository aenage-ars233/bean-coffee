import styled from "styled-components";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";

import background from "../../../assets/bg-discover.png";

export const StyledDiscover = styled.section`
  background-color: white;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 500px 484px;
  background-position: 773px 82px;
  padding: 150px 688px 150px 93px;
`;

export const ContentWrapper = styled.div`
  width: 585px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 29px;
`;

export const StyledButton = styled(Button)`
  margin-top: 29px;
`;