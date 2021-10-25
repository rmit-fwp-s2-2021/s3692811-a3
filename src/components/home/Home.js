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
    if (localStorage.getItem("input")) {
      handleChangeInput(localStorage.getItem("input"));
      search(localStorage.getItem("input"));
    }
  }, []);

  /*
    This useEffect serves as a helper function for useInput hook.
    It helps to clear the input of the search bar after successful searches.
    To test it, just unComment the useEffect below and remove the code from line 21 to 24.
  */
  //   useEffect(() => {
  //     handleChangeInput("");
  //   }, [profiles]);

  const search = (input) => {
    setProfiles(
      portfolios.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      )
    );
    //Store the input to the localStorage
    localStorage.setItem("input", input);
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
        <SH.Button
          variant="success"
          onClick={() => {
            search(input);
          }}
        >
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
