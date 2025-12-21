import styled from "styled-components";

import CoffeBlastRight from "../../../assets/decorations/coffee-blast-right.png";
import CoffeBlastLeft from "../../../assets/decorations/coffee-blast-left.png";
import CoffeeCupRight from "../../../assets/decorations/coffee-cup-right.png";
import CoffeeCupLeft from "../../../assets/decorations/coffee-cup-left.png";

const Decorations = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 100;
  pointer-events: none;
  width: 1366px;
  height: 5095px;
  margin-left: -683px;
  background-image: url("${CoffeBlastRight}"), url("${CoffeBlastLeft}"), url("${CoffeBlastLeft}"), url("${CoffeeCupRight}"), url("${CoffeeCupLeft}");
  background-repeat: no-repeat;
  background-position: 0 1189px, 100% 1924px, 100% 3500px, 0 4380px, 100% 4380px;
`;

export default Decorations;