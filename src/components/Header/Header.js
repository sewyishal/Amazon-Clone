import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* Amazon Logo */}
          <div className={classes.logo__Container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
                className="header__logo"
              />
            </a>

            {/* delivery */}
            <span></span>
            <div className="className={classes.delivery}">
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div>
          {/*Search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch />
          </div>
        </div>
        {/* right side link*/}
        <div className={classes.order__container}>
          <div>
            <a href="/" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/330px-Flag_of_the_United_States_%28Web_Colors%29.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
          </div>
          {/* three components*/}
          <a href="/">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/*orders*/}
          <a href="/">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          {/*cart*/}
          <a href="/" className={classes.cart}>
            <BiCart />
            <span>0</span>
          </a>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
