import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
          alt=""
        />

        <div className="home-row">
          <Product
            id={1}
            title={"The lean startuo"}
            img={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_dash_BTS_backpack_1X._SY304_CB630082004_.jpg"
            }
            price={200}
            rating={4}
          />
          <Product
            id={2}
            img={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
            }
            price={200}
            rating={5}
            title={"For your Fitness Needs"}
          />
        </div>
        <div className="home-row">
          <Product
            price={200}
            id={3}
            img={
              "https://m.media-amazon.com/images/I/517S7lXb+mL._AC_UF226,226_FMjpg_.jpg"
            }
          />
          <Product
            price={200}
            id={4}
            img={
              "https://m.media-amazon.com/images/I/517S7lXb+mL._AC_UF226,226_FMjpg_.jpg"
            }
          />
          <Product
            price={200}
            id={5}
            img={
              "https://m.media-amazon.com/images/I/41XXznOD-JL._AC_UF226,226_FMjpg_.jpg"
            }
          />
        </div>
        <div className="home-row"></div>
        <Product
          price={100}
          id={6}
          img={"https://m.media-amazon.com/images/I/71GOki8Sk9L._AC_SY200_.jpg"}
          title={"Top Sellers in Baby Products for you"}
        />
      </div>
    </div>
  );
};

export default Home;
