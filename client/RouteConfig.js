import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";

const RouteConfig = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default RouteConfig;
