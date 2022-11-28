import React from "react";
import { Card } from "antd";

// Image
import phone from "../../assets/images/phone.jpg";

// Styles
import styles from "./Cards.module.css";

const Cards = (props) => {
  return (
    <>
      <Card
        className={styles.cards}
        hoverable
        cover={
          <img
            src={props.image !== "" ? props.image : phone}
            alt={props.title}
          />
        }
      >
        <div style={{ textAlign: "left" }}>
          <p className={styles.title}>
            Model: <span>{props.model}</span>
          </p>
          <p className={styles.title}>
            Price: <span>{props.price}$</span>
          </p>
          <p className={styles.title}>
            Desc: <span>{props.desc}</span>
          </p>
        </div>
      </Card>
    </>
  );
};

export default Cards;
