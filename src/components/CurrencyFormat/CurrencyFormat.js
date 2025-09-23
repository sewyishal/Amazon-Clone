import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount }) => {
  const formatedAmount = numeral(amount).format("$0,0.00");
  return <span>{formatedAmount}</span>;
};
export default CurrencyFormat;
