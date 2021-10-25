import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Button } from "react-bootstrap";
import useInput from "../../custom_hook/useInput";
import portfolios from "../porfolio/data";
import PortfolioCard from "../porfolio/PortfolioCard";
import { BeatLoader } from "react-spinners";
import { BsSearch } from "react-icons/bs";

import { StyledHome as SH } from "./Home.style";

const Home = () => {
  const [profiles, setProfiles] = useState([...portfolios]);
  const { input, handleChangeInput } = useInput("", profiles);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("input")) {
      handleChangeInput(localStorage.getItem("input"));
      search(localStorage.getItem("input"));
    }
  }, []);

  const search = (input) => {
    setLoading(true);

    //Store the input to the localStorage
    localStorage.setItem("input", input);
    setTimeout(() => {
      setLoading(false);
      setProfiles(
        portfolios.filter((item) =>
          item.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }, 500);
  };

  return (
    <SH.HomeContainer className="container">
      <center>
        <h1>Welcome to Portfolio Search</h1>
      </center>

      <SH.SearchContainer>
        <SH.SearchBar
          title="input"
          type="text"
          placeholder="Search name ..."
          value={input}
          onChange={(e) => {
            handleChangeInput(e.target.value);
          }}
        />
        <SH.Button
          title="searchButton"
          variant="success"
          onClick={() => {
            search(input);
          }}
        >
          {loading ? (
            <BeatLoader color="white" loading={loading} size={10} />
          ) : (
            <>
              Search
              <BsSearch style={{ marginLeft: "5px" }} />
            </>
          )}
        </SH.Button>
      </SH.SearchContainer>
      <SH.PortfolioContainer>
        {profiles.map((user) => (
          <PortfolioCard data={user} />
        ))}
      </SH.PortfolioContainer>
      {profiles.length == 0 ? (
        //   The height in this div help the app's background to maitain a filled color
        <div style={{ height: "100vh" }}>
          <center>There is no profile match with your search.</center>
        </div>
      ) : (
        ""
      )}
    </SH.HomeContainer>
  );
};

export default Home;
