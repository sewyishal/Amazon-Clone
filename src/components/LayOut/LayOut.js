import React from "react";
import Header from "../Header/Header";

const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LayOut;
