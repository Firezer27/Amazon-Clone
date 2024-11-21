import React from "react";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

import amazonImage from "../../assets/amazon-image.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <section>
      <div className={classes.header__container}>
        <div className={classes.logo_container}>
          <a href="">
            <img src={amazonImage} alt="amazon log" />
          </a>
          {/* delivery */}

          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div>
          {/* search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          {/* icon */}
          <FaSearch />
        </div>
        {/* right side link */}
        <div>
          <div>
            <img src=" " alt="" />
            <section>
              <option value="">EN</option>
            </section>
          </div>
          {/* three component */}
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/* orders */}
          <a href="">
            <p>returns</p>
            <span>& Orders</span>
          </a>
          {/* cart */}
          <a to={"/cart"}>
            <BiCart />
            <span>0</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
