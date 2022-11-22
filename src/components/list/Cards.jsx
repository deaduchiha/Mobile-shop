import React from "react";
import { Card } from "antd";

const Cards = (props) => {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 280,
        }}
        cover={<img alt="example" src={props.image} />}
      >
        <div style={{ textAlign: "left" }}>
          <p>model: {props.model}</p>
          <p>price: {props.price}$</p>
          <p>desc: {props.description}</p>
        </div>
      </Card>
    </div>
  );
};

export default Cards;
