import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledPortfolio = {};

StyledPortfolio.Card = styled(Card)`
  width: 15rem;
  height: 80vh;
  padding-top: 5rem;
  text-align: center;
  transition: 0.5s;
  border-radius: 10px;
  &:hover {
    filter: drop-shadow(0 0 0.75rem);
  }
`;
