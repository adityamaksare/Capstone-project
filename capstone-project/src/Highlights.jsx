import React from "react";
import BikeImage from "./Assets/Bike.png";
import menuData from "./Assets/menuData.json";

const MenuCardComponent = ({ item }) => {
  return (
    <>
      <div className="card-component" style={{ width: "18rem" }}>
        <img
          src={item.image.url}
          className="card-img-top"
          alt={item.name}
          style={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
        />
        <div className="card-body">
          <div className="justify-content-between" style={{ display: "flex" }}>
            <h5 className="card-title" style={{ margin: "15px 20px" }}>
              {item.name}
            </h5>
            <p className="price-tag">{item.price}</p>
          </div>

          <p className="card-text">{item.description}</p>
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
    <div className="container highlights p-5">
      <h1 className=" mb-4" style={{ marginLeft: "100px" }}>
        This Week's Special!
      </h1>
      <div className="row g-3 px-2 px-md-4">
        {menuData.menu.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
          >
            <MenuCardComponent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
