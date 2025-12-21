import React, { useState } from "react";
import Container from "../../layout/container/container";
import Title from "../../ui/title/title";
import Text from "../../ui/text/text";
import Button from "../../ui/button/button";
import Icon from "../../ui/icon/icon";
import { StyledSection, StyledHeader, StyledTitle, Review, ReviewText, ReviewRole, StyledAvatar, CommunityControls } from "./styles";

import ArrowLeft from "../../../assets/icons/arrow-left.svg?react";
import ArrowRight from "../../../assets/icons/arrow-right.svg?react";

export default function Community({ community }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === community.length - 1;

  const currentReview = community[currentIndex];

  return (
    <Container>
      <StyledSection>
        <StyledHeader>
          <StyledTitle>Our coffee perfection feedback</StyledTitle>
          <Text>Our customers has amazing things to say about us</Text>
        </StyledHeader>
        <Review>
          <ReviewText size={18}>{currentReview.text}</ReviewText>
          <div className="community__author">
            <Title size={32} as="h3">{currentReview.name}</Title>
            <ReviewRole>{currentReview.role}</ReviewRole>
            <StyledAvatar src={currentReview.avatar} alt={currentReview.name} />
          </div>
        </Review>
        <CommunityControls>
          <Button variant="big" disabled={isFirst} onClick={() => setCurrentIndex(currentIndex - 1)}>
            <Icon component={ArrowLeft} width={16} height={16} />
          </Button>
          <Button variant="big" disabled={isLast} onClick={() => setCurrentIndex(currentIndex + 1)}>
            <Icon component={ArrowRight} width={16} height={16} />
          </Button>
        </CommunityControls>
      </StyledSection>
    </Container>
  );
}