import styled from "styled-components";
import { Button } from "react-bootstrap";
export const StyledHome = {};

StyledHome.HomeContainer = styled.div``;

StyledHome.PortfolioContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
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

StyledHome.Button = styled.button`
  border-radius: 10px;
  border: none;
  color: white;
  background-size: 200%;
  outline: none;
  background-image: linear-gradient(to left, #f4d03f, #d68910, #e74c3c);
  transition: background-position 0.5s;
  width: 8rem;
  &:hover {
    background-position: right;
  }
  &:focus {
    outline: none;
    outline-offset: none;
  }
`;
