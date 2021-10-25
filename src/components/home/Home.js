import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import portfolios from "../porfolio/data";
import PortfolioCard from "../porfolio/PortfolioCard";

import { StyledHome as SH } from "./Home.style";

const Home = () => {
  const [state, setState] = useState(Array.from(portfolios));
  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <div className="container">
      <SH.PortfolioContainer>
        {state.map((user) => (
          <PortfolioCard data={user} />
        ))}
      </SH.PortfolioContainer>
    </div>
  );
};

export default Home;
