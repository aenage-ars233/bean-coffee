import styled from "styled-components";
import Title from "../../ui/title/title";
import Card from "../../ui/card/card";

export const StyledSection = styled.section`
  margin-bottom: 82px;
`;

export const StyledHeader = styled.header`
  width: 980px;
  margin: 0 auto;
  margin-bottom: 32px;
  text-align: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 12px;
`;

export const FeaturesList = styled.ul`
  width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 32px;
`;

export const FeatureCard = styled(Card)`
  width: 280px;
  padding: 36px 30px;
  text-align: center;
`;

export const CardTitle = styled(Title)`
  margin-top: 15px;
  margin-bottom: 8px;
`;

export const StyledFooter = styled.footer`
  width: 980px;
  margin: 0 auto;
  text-align: center;
`;

export const FooterTitle = styled(Title)`
  margin-bottom: 24px;
`;

