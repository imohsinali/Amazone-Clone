import { Star } from "@mui/icons-material";
import { Rating } from "@mui/material";
import React from "react";
import "./Product.css";
const Product = ({ title, img, price, rating }) => {
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
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
