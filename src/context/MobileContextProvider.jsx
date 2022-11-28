import React, { useReducer, createContext } from "react";

// Images

// InitialState
const initialState = {
  products: [
    {
      id: 1,
      model: "Samsung S22",
      price: 800,
      desc: "This is samsung dadash",
      image: "/images/samsungS22.jpg",
    },
    {
      id: 2,
      model: "Iphone 14 pro max",
      price: 600,
      desc: "This is iphone bedard nakhor",
      image: "/images/iphone14proMax.png",
    },
    {
      id: 3,
      model: "One Plus Pro10",
      price: 600,
      desc: "This is onePlus amo jooon",
      image: "/images/onePlusPro10.jpg",
    },
    {
      id: 4,
      model: "Google pixle 4a",
      price: 185,
      desc: "This product is eligible for a replacement or refund within 1-Year of receipt if it does not work as expected",
      image: "/images/google4a.jpg",
    },
    {
      id: 5,
      model: "Google pixle 6 pro",
      price: 654,
      desc: "in gooshi kheili khafane bayad dark konish",
      image: "/images/googlePixle6.jpg",
    },
  ],
};

export let baseNumber = 6;

// MobileReducer
const mobileReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      baseNumber++;
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export const MobileContext = createContext();

const MobileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mobileReducer, initialState);
  return (
    <MobileContext.Provider value={{ state, dispatch }}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileContextProvider;
