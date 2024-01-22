import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/images/byte_bite_logo.png";
import "./styles.css";
import restaurants from "./data.js";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="header__logo"></img>
      <ul className="header__nav">
        <li className="nav__item">Offers</li>
        <li className="nav__item">Help</li>
        <li className="nav__item">Sign in</li>
        <li className="nav__item">Cart</li>
      </ul>
    </div>
  );
};

const ResCard = (props) => {
  let { id, name, cloudinaryImageId, areaName, cuisines, avgRating } =
    props.resData.info;
  let { deliveryTime } = props.resData.info.sla;
  return (
    <div className="card">
      <img
        className="card__img"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_204,h_128,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>
        &#9734; {avgRating} • {deliveryTime} mins
      </h4>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

const ResCardContainer = (props) => {
  return (
    <div className="card-container">
      {restaurants.map((restaurant) => {
        return <ResCard key={restaurant.info.id} resData={restaurant} />;
      })}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <input
        placeholder="Search for restaurants and food"
        className="body__search"
      ></input>
      <button>Search</button>
      <ResCardContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Body />
  </>
);
