import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./public/images/byte_bite_logo.png";
import "./styles.css";

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

const Card = () => {
  return (
    <div className="card">
      <img src="https://picsum.photos/200/150"></img>
      <h3>Burger King</h3>
      <h4>Burgers, American</h4>
      <p>4.4 stars</p>
      <p>35 mins</p>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
      <CardContainer />
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
