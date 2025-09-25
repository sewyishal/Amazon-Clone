import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { title, image, id, price, rating } = product;

  return (
    <div className={classes.card__container}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
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
