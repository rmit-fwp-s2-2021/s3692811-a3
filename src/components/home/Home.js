import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Button } from "react-bootstrap";
import useInput from "../../custom_hook/useInput";
import portfolios from "../porfolio/data";
import PortfolioCard from "../porfolio/PortfolioCard";

import { StyledHome as SH } from "./Home.style";

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const { input, handleChangeInput } = useInput("");

  const handleChange = (e) => {
    handleChangeInput(e.target.value);
  };
  useEffect(() => {
    setProfiles(Array.from(portfolios));
  }, []);

  /*
  The useEffect serve as a helper function for useInput hook.
  It helps to clear the input of the search bar after successful searches.
  */
  useEffect(() => {
    handleChangeInput("");
  }, [profiles]);

  const search = () => {
    setProfiles(
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
        {profiles.map((user) => (
          <PortfolioCard data={user} />
        ))}
      </SH.PortfolioContainer>
    </SH.HomeContainer>
  );
};

export default Home;
