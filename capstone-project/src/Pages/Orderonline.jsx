import React, { useState } from "react";

export const Orderonline = () => {
  const [quantity, setQuantity] = useState(1);
  const [deliveryLocation, setDeliveryLocation] = useState("Home");

  const pricePerItem = 12.99;

  // Calculate total price based on quantity
  const totalPrice = (quantity * pricePerItem).toFixed(2); // To ensure two decimal places

  // Handle Increment
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handle Decrement
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Handle Delivery Location Change
  const handleLocationChange = (location) => {
    setDeliveryLocation(location);
  };

  return (
    <section className="container p-5">
      <div className="row g-3">
        {/* Greek Salad Card */}
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div
            className="card mx-auto"
            style={{
              borderRadius: "15px",
              maxWidth: "300px", // Adjusted the card width
            }}
          >
            {/* Image */}
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              className="card-img-top"
              alt="Greek Salad"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />

            {/* Card Body */}
            <div className="card-body">
              {/* Title and Price */}
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">Greek Salad</h5>
                <h5>${pricePerItem}</h5>
              </div>

              {/* Description */}
              <p className="card-text">
                The famous Greek salad of crispy lettuce, pepper, olives and our
                Chicago-style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>

              {/* Quantity Selector */}
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleDecrement}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control mx-2 text-center"
                  value={quantity}
                  readOnly
                  style={{ width: "50px", borderRadius: "10px" }}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleIncrement}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div
            className="card mx-auto"
            style={{
              borderRadius: "15px",
              maxWidth: "300px", // Adjusted the card width
            }}
          >
            {/* Card Body */}
            <div className="card-body">
              {/* Order Summary Header */}
              <h5 className="card-title">Order Summary</h5>

              {/* Delivery Info */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  {/* Delivery Icon (simulating with a gray circle) */}
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "#ccc",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  <span>Delivery 20 mins</span>
                </div>

                {/* Change Button */}
                <div className="dropdown">
                  <button
                    className="btn btn-outline-secondary btn-sm dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {deliveryLocation}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLocationChange("Home")}
                      >
                        Home
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => handleLocationChange("Office")}
                      >
                        Office
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Delivery Address */}
              <h6 className="text-dark">Delivery address:</h6>
              <p
                className="card-text"
                style={{ fontSize: "14px", color: "#6c757d" }}
              >
                Flat No. 7A,
                <br />
                Building No. 3,
                <br />
                Krishna Residency,
                <br />
                Sector 12, Andheri West,
                <br />
                Mumbai, Maharashtra - 400053, India.
              </p>

              {/* Add to Cart Button with updated total price */}
              <button
                className="btn btn-dark w-100"
                style={{ borderRadius: "10px" }}
              >
                Add for ${totalPrice}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orderonline;
