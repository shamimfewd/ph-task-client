import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Shired/Nav";
import Footer from "../Shired/Footer";

const Root = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
