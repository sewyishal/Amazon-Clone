import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        {/* Top bar */}
        <div className={classes.topBar}>
          {/* Logo + delivery */}
          <div className={classes.left}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
                className={classes.logo}
              />
            </Link>
            <div className={classes.delivery}>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          {/* Search */}
          <div className={classes.searchContainer}>
            <select className={classes.categorySelect}>
              <option value="">All</option>
            </select>
            <input
              type="text"
              placeholder="Search products"
              className={classes.searchInput}
            />
            <button className={classes.searchButton}>
              <BsSearch />
            </button>
          </div>

          {/* Right links */}
          <div className={classes.right}>
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/330px-Flag_of_the_United_States_%28Web_Colors%29.svg.png"
                alt="US Flag"
              />
              <select>
                <option>EN</option>
              </select>
            </div>

            <Link to="/auth" className={classes.account}>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>

            <Link to="/orders" className={classes.orders}>
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <BiCart />
              <span>0</span>
            </Link>
          </div>
        </div>
      </header>

      <LowerHeader />
    </>
  );
};

export default Header;
