import { Star } from "@mui/icons-material";
import { Rating } from "@mui/material";
import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";
const Product = ({ id, title, img, price, rating }) => {
  const [state, dispatch] = useStateValue();
  console.log("This is ", state.basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Star />
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
