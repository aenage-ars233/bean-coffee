import styled from "styled-components";
import Text from "../../ui/text/text";
import Title from "../../ui/title/title";
import NavLink from "../../ui/navlink/navlink";

import background from "../../../assets/bg-footer.png";

export const StyledFooter = styled.footer`
  display: flex;
  padding: 142px 63px 72px 93px;
  background-color: #442808;
  background-image: url("${background}");
  background-repeat: no-repeat;
`;

export const LeftColumn = styled.div`
  width: 380px;
  margin-right: 66px;
`;

export const StyledText = styled(Text)`
  margin: 20px 0;
  line-height: 22px;
`;

export const SocialLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const RightColumn = styled.div`
  display: flex;
  gap: 66px;
`;

export const GroupTitle = styled(Title)`
  margin-bottom: 55px;
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Link = styled(NavLink)`
  font-size: 16px;
`;