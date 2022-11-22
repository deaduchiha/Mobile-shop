import React from "react";

// Components
import Cards from "./Cards";

// Images
import samsungS22 from "../../assets/images/samsung s22.jpg";

const List = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <Cards
        image={samsungS22}
        model="samsung s22"
        price="600$"
        desc="this is samsung dadash"
      />
      <Cards
        image={samsungS22}
        model="samsung s22"
        price="600$"
        desc="this is samsung dadash"
      />
      <Cards
        image={samsungS22}
        model="samsung s22"
        price="600$"
        desc="this is samsung dadash"
      />
      <Cards
        image={samsungS22}
        model="samsung s22"
        price="600$"
        desc="this is samsung dadash"
      />
      <Cards
        image={samsungS22}
        model="samsung s22"
        price="600$"
        desc="this is samsung dadash"
      />
      <Cards
        image={samsungS22}
        model="samsung s22"
        price="600$"
        desc="this is samsung dadash"
      />
      <Cards
        image={samsungS22}
        model="samsung s22"
        price="600$"
        desc="this is samsung dadash"
      />
      <Cards
        image={samsungS22}
        model="samsung s22"
        price="600$"
        desc="this is samsung dadash"
      />
    </div>
  );
};

export default List;
