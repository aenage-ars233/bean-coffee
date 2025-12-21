import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.highlighted ? "#FFEED8" : "#FFF9F1"};
  border: 1px solid rgba(249, 192, 106, 0.42);
  position: relative;
`;

export default Card;