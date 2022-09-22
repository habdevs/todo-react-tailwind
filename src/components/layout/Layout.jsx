import React from "react";
import Home from "../screens/Home/Home";

const Layout = ({ children }) => {
  return (
    <div className="bg-zinc-900 h-screen">
      <Home></Home>
    </div>
  );
};

export default Layout;
