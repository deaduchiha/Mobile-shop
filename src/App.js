import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/shared/Navbar/Navbar";
import List from "./components/list/List";
import Mobile from "./components/mobile/Mobile";
import Layout from "./components/shared/Layout/Layout";

// Context
import MobileContextProvider from "./context/MobileContextProvider";

const App = () => {
  return (
    <>
      <MobileContextProvider>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/mobile" element={<Mobile />} />
          </Routes>
        </Layout>
      </MobileContextProvider>
    </>
  );
};

export default App;
