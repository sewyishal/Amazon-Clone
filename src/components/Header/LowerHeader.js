import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css"; // ✅ Import CSS module

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <span>All</span>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Gift Cards</li>
        <li>Registry</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
