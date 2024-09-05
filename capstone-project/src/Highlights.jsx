import React from "react";
import FoodImage from "./Assets/greek salad.jpg";
import BikeImage from "./Assets/Bike.png";

const MenuCardComponent = () => {
  return (
    <>
      <div className="card-component" style={{ width: "18rem" }}>
        <img
          src={FoodImage}
          className="card-img-top"
          alt="Food Item"
          style={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
        />
        <div className="card-body">
          <div className="justify-content-between" style={{ display: "flex" }}>
            <h5 className="card-title" style={{ margin: "15px 20px" }}>
              Greek Salad
            </h5>
            <p className="price-tag">$12.99</p>
          </div>

          <p className="card-text">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <div
            href="/"
            className="order-delivery d-flex justify-content-between"
            style={{ padding: "0px 20px" }}
          >
            <p style={{ textDecoration: "none" }}>Order a delivery</p>
            <img
              style={{ height: "18px", width: "25px" }}
              src={BikeImage}
              alt="Delivery bike"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const Highlights = () => {
  return (
    <div className="container highlights p-0">
      <h1>This Week Special!</h1>
      <div className="menu">
        <MenuCardComponent />
      </div>
    </div>
  );
};
