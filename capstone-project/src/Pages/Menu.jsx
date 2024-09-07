import React from "react";
import BikeImage from "../Assets/Bike.png";
import menuData from "../Assets/menuData.json";
import { useState } from "react";

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

export const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the menu items based on the search query starting with the entered letters
  const filteredMenu = menuData.menu.filter((item) =>
    item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="container p-0">
      {/* Navbar with Search Input */}
      <div className="navbar navbar-light bg-white justify-content-center py-3">
        <div
          className="input-group"
          style={{ maxWidth: "800px", width: "100%" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Chicken Burger..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="row g-3 m-0 p-5">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-3 d-flex justify-content-center"
            >
              <MenuCardComponent item={item} />
            </div>
          ))
        ) : (
          <p className="text-center">No items match your search.</p>
        )}
      </div>
    </div>
  );
};
export default Menu;
