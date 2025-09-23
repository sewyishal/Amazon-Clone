import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";

const ProductCard = ({ product }) => {
  // ✅ lowercase 'product'
  const { title, image, price, rating } = product;

  return (
    <div className={classes.card__container}>
      <a href="/">
        <img src={image} alt={title} /> {/* ✅ better alt */}
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* ✅ use rating.rate instead of whole object */}
          <Rating value={rating?.rate} precision={0.1} readOnly />
          <small>{rating?.count} reviews</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
