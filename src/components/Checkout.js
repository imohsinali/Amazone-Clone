import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
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
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
