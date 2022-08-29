import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Header = () => {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
        srcset=""
      />
      <div className="header-option">
        <span className="header-option-lineOne">Deliver to</span>
        <div className="location">
          <LocationOnIcon className="header-option-location" />

          <span className="header-option-lineTwo">Pakistan</span>
        </div>
      </div>
      <div className="header-search">
        <input type="text" className="header-search-input" />
        <SearchIcon className="header-search-icon" />
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
        <div className="header-optionBasket">
          <ShoppingBasket />
          <span className="header-option-lineTwo header-basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
