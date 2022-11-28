import React, { useContext } from "react";

// Components
import Cards from "./Cards";

// Context
import { MobileContext } from "../../context/MobileContextProvider";

// Styles
import styles from "./List.module.css";

const List = () => {
  const { state } = useContext(MobileContext);

  return (
    <div className={styles.container}>
      {state.products.map((product) => (
        <Cards
          key={product.id}
          image={product.image}
          model={product.model}
          price={product.price}
          desc={product.desc}
        />
      ))}
    </div>
  );
};

export default List;
