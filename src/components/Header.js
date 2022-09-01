import React, { useRef } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
const Header = () => {
  const focusRef = useRef(0);
  const falltenArray = (array, depth = 1) => {
    let result = [];
    array.forEach((arr) => {
      if (Array.isArray(arr) && depth > 0) {
        result.push(...falltenArray(arr, depth - 1));
      } else result.push(arr);
    });
    return result;
  };

  function fun() {
    for (var a = 0; a < 3; a++) {
      setTimeout(function log() {
        // let v = fun();
        // console.log(v);
        console.log(a);
        // return log();
      });
    }
  }
  fun();
  const ar = [1, 2, 3, [1, 2, 3, [4, 5, 6]], 3];

  console.log(ar.flat(1));
  const onClick = () => {
    focusRef.current.focus();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          srcset=""
        />
      </Link>
      <div className="header-option">
        <span className="header-option-lineOne">Deliver to</span>
        <div className="location">
          <LocationOnIcon className="header-option-location" />

          <span className="header-option-lineTwo">Pakistan</span>
        </div>
      </div>
      <div className="header-search">
        <input type="text" className="header-search-input " ref={focusRef} />
        <button className="header-search-icon" onClick={onClick}>
          <SearchIcon />
        </button>
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-option-lineOne">Hello Guest</span>
          <span className="header-option-lineTwo">Sign In</span>
        </div>
        <div className="header-option">
          <span className="header-option-lineOne">Returns</span>
          <span className="header-option-lineTWo">Order</span>
        </div>
        <div className="header-option">
          <span className="header-option-lineOne">Your</span>
          <span className="header-option-lineTwo">Prime</span>
        </div>
        <Link to="checkout">
          <div className="header-optionBasket">
            <ShoppingBasket />
            <span className="header-option-lineTwo header-basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
