import React from "react";

// Components
import Cards from "./Cards";

// Styles
import styles from "./List.module.css";

import { phones } from "./Items";
const List = () => {
  return (
    <div className={styles.container}>
      {phones.map((item) => (
        <Cards
          key={item.model}
          image={item.image}
          model={item.model}
          price={item.price}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default List;
