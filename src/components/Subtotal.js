import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";
const Subtotal = () => {
  const navigate = useNavigate();

  const [{ basket }, dispatch] = useStateValue();
  // const b = basket.reduce((total, item) => total + item.price);
  const initialValue = 0;
  // const total = basket.reduce((accumulator,current) => accumulator + current.aprice * current.quantity, initialValue)
  let amount = 0;
  for (let i = 0; i < basket.length; i++) {
    amount += basket[i].price;
  }
  console.log(amount);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{amount}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};
export default Subtotal;
