import React, { useRef } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const focusRef = useRef(0);
  const onClick = () => {
    focusRef.current.focus();
  };

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
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
        <Link
          to={!user && "/login"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-option-lineOne">
              Hello {user ? user.email : "Guest"}
            </span>{" "}
            <span className="header-option-lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>{" "}
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
            <span className="header-option-lineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
