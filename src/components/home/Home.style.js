import styled from "styled-components";
import { Button } from "react-bootstrap";
export const StyledHome = {};

StyledHome.HomeContainer = styled.div``;

StyledHome.PortfolioContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

StyledHome.SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

StyledHome.SearchBar = styled.input`
  width: 40vw;
  border-radius: 10px;
  border: none;
  margin-right: 10px;
  outline: none;
`;

StyledHome.Button = styled(Button)`
  border-radius: 10px;
  border: none;
  background-size: 200%;

  background-image: linear-gradient(to left, #f4d03f, #d68910, #e74c3c);
  transition: background-position 1.5s;
  &:hover {
    background-position: right;
  }
`;
