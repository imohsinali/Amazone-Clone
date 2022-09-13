import React from "react";
import "./CheckoutProduct.css";
import { Star } from "@mui/icons-material";
import { useStateValue } from "../StateProvider";
import FlipMove from "react-flip-move";

const CheckOutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: id });
  };
  return (
    <FlipMove>
      <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct-image" />
        <div className="checkoutProduct-info">
          <p className="checkoutProduct-title">{title}</p>
          <p className="checkoutProduct-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <Star />
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </FlipMove>
  );
};

export default CheckOutProduct;
