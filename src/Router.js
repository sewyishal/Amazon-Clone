import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Orders from "./Pages/Orders/Orders";
import Payment from "./Pages/Payment/Payment";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Results from "./Pages/Results/Results";
import Cart from "./Pages/Cart/Cart";
import SignUp from "./Pages/Auth/SignUp";
const Routing = () => {
  return (
    <Router>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Landing />} />{" "}
        <Route path="/auth" element={<SignUp />} />{" "}
        <Route path="/cart" element={<Cart />} />{" "}
        <Route path="/orders" element={<Orders />} />{" "}
        <Route path="/payment" element={<Payment />} />{" "}
        <Route path="/product/:id" element={<ProductDetail />} />{" "}
        <Route path="/results" element={<Results />} />{" "}
      </Routes>{" "}
    </Router>
  );
};
export default Routing;
