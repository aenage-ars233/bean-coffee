import styled from "styled-components";
import Title from "../../ui/title/title";
import Text from "../../ui/text/text";
import Avatar from "../../ui/avatar/avatar";

export const StyledSection = styled.section`
  margin-bottom: 102px;
  position: relative;
`;

export const StyledHeader = styled.header`
  width: 980px;
  margin: 0 auto;
  margin-bottom: 45px;
  text-align: center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 10px;
`;

export const Review = styled.div`
  position: relative;
  width: 980px;
  padding: 129px 100px 101px 100px;
  margin: 0 auto;
  background-color: #FFF9F1;
  border: 1px solid rgba(249, 192, 106, 0.42);
  text-align: center;
`;

export const ReviewText = styled(Text)`
  font-weight: 500;
  margin-bottom: 28px;
`;

export const ReviewRole = styled(Text)`
  
`;

export const StyledAvatar = styled(Avatar)`
  position: absolute;
  top: 448px;
  left: 420px;
`;

export const CommunityControls = styled.div`
  width: 1052px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 388px;
  left: 160px;
`;