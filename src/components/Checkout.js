import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdB_qtAae7i0blLB7xLuYgemc0o9yDo0hS-HLt9Knv"
          alt=""
          className="checkout-ad"
        />
        <div>
          <h2 className="checkout-title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
