import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
const LowerHeader = () => {
  return (
    <div>
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
