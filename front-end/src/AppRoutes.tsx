import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
