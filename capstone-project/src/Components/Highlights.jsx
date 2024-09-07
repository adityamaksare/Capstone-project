import React from "react";
import BikeImage from "../Assets/Bike.png";
import menuData from "../Assets/menuData.json";

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
        <div className="card-body m-0">
          <div className="d-flex justify-content-between">
            <h5 className="card-title" style={{ margin: "15px 15px" }}>
              {item.name}
            </h5>
            <p className="price-tag">{item.price}</p>
          </div>
          <p className="card-text">{item.description}</p>
          <div className="order-delivery d-flex justify-content-between px-3">
            <p style={{ fontFamily: "Karla", fontWeight: "700" }}>
              Order a delivery
            </p>
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
    <div
      className="container highlights"
      style={{ padding: "30px 0px 50px 0px" }}
    >
      <div className="row d-flex align-items-center mb-3">
        <div className="col-12 col-md-6 text-center text-md-start p-0">
          <h1 className="m-5">This Week's Special!</h1>
        </div>
        <div className="col-12 col-md-6 text-center text-md-end">
          <button>Order Online</button>
        </div>
      </div>

      <div className="row g-3">
        {menuData.menu.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="col-12 col-md-6 col-lg-3 d-flex justify-content-center"
          >
            <MenuCardComponent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
