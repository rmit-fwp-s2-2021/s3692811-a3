import React from "react";
import { Card, Image } from "react-bootstrap";

const PortfolioCard = ({ data }) => {
  return (
    <Card style={{ width: "15rem" }}>
      <center>
        <Image
          roundedCircle
          style={{ height: "100%", width: "10rem" }}
          variant="top"
          src={process.env.PUBLIC_URL + data.image}
        />
      </center>

      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eveniet
          minus voluptates accusantium nisi rerum maxime repellat alias officia
          fuga quos facilis deserunt doloremque totam eaque, numquam, vel, quo
          sint!
        </Card.Text>
      </Card.Body>
      <Card.Footer>{data.role}</Card.Footer>
    </Card>
  );
};

export default PortfolioCard;
