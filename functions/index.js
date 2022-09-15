const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
//
const stripe = require("stripe")(
  " sk_test_51LhSCBSCwlOA64YeLDXsJcQu4CMOQkIcABKnS5DEyahJoLbYGd7TDhkQpOSlkL8DGF7i5dBhpdnZyFMWRGTFkgdF00NzWMle3b"
);

//Api
//App config

const app = express();
// Middleware
app.use(cors({ origin: true }));
app.use(express.json());
//api routes

app.get("/", (req, res) => res.status(200).send("hello world"));
app.get("/mohsin", (req, res) => res.status(200).send("hello Mohsin"));
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request recived boom", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listing
exports.api = functions.https.onRequest(app);
// http://localhost:5001/e-clone-e3d69/us-central1/api
