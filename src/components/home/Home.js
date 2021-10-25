import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Button } from "react-bootstrap";
import useInput from "../../custom_hook/useInput";
import portfolios from "../porfolio/data";
import PortfolioCard from "../porfolio/PortfolioCard";

import { StyledHome as SH } from "./Home.style";

const Home = () => {
  const [state, setState] = useState(Array.from(portfolios));
  const { input, handleChangeInput } = useInput("");

  const handleChange = (e) => {
    handleChangeInput(e.target.value);
  };
  useEffect(() => {
    console.log(state);
  }, [...state]);

  const search = () => {
    setState(
      portfolios.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  return (
    <SH.HomeContainer className="container">
      <center>
        <h1>Welcome to Portfolio Search</h1>
      </center>

      <SH.SearchContainer>
        <SH.SearchBar
          type="text"
          placeholder="Search name ..."
          value={input}
          onChange={handleChange}
        />
        <SH.Button variant="success" onClick={search}>
          Search
        </SH.Button>
      </SH.SearchContainer>
      <SH.PortfolioContainer>
        {state.map((user) => (
          <PortfolioCard data={user} />
        ))}
      </SH.PortfolioContainer>
    </SH.HomeContainer>
  );
};

export default Home;
