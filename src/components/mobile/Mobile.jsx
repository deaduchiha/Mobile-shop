import React, { useContext, useState } from "react";
import { Button, Input } from "antd";

// Context
import { baseNumber, MobileContext } from "../../context/MobileContextProvider";

// Styles
import styles from "./Mobile.module.css";

const { TextArea } = Input;

const Mobile = () => {
  const { dispatch } = useContext(MobileContext);

  const [placeholder, setPlaceholder] = useState("");

  const [modelValue, setModelValue] = useState({
    model: "",
    price: "",
    desc: "",
    image: "",
  });

  // Change Handler
  const changeHandler = (event) => {
    setModelValue({ ...modelValue, [event.target.name]: event.target.value });
  };

  // Submit Handler
  const submitHandler = () => {
    if (`${modelValue.desc && modelValue.model && modelValue.price}` === "")
      setPlaceholder("its empty :'(🥲");
    else {
      dispatch({
        type: "ADD",
        payload: { id: baseNumber, ...modelValue },
      });
      console.log(modelValue);
      alert("Done");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Model: </span>
        <Input
          placeholder={placeholder}
          onChange={changeHandler}
          name="model"
          type="text"
        />
      </div>
      <div className={styles.title}>
        <span>Price: </span>
        <Input
          placeholder={placeholder}
          onChange={changeHandler}
          name="price"
          type="text"
        />
      </div>
      <div className={styles.title}>
        <span>Description: </span>
        <TextArea
          placeholder={placeholder}
          className={styles.textArea}
          onChange={changeHandler}
          name="desc"
          type="text"
        />
      </div>
      <div className={styles.title}>
        <span>Phone image: </span>

        <Input
          multiple={false}
          onChange={changeHandler}
          name="image"
          accept="image/*"
          type="file"
        />
      </div>
      <Button onClick={submitHandler}>Submit</Button>
    </div>
  );
};

export default Mobile;
