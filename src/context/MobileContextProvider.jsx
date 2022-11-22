import React, { useContext, useReducer } from "react";

// InitialState
const initialState = {
  id: 0,
  model: "",
  image: "",
};

const MobileContex = useContext();

const MobileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mobileReducer, initialState);
  return (
    <MobileContex.Provider value={{ state, dispatch }}>
      {children}
    </MobileContex.Provider>
  );
};

export default MobileContextProvider;
