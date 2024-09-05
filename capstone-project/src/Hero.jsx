import React from "react";
import OverlapImage from "./Assets/restaurantfood.jpg";

export const Hero = () => {
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#495E57" }}>
      <div className="container p-0 ">
        <div className="row m-0">
          <div className="col-12 col-md-6 d-flex flex-column align-items-start justify-content-left p-0">
            <h1 className="m-0 little-lemon-heading mt-5">Little Lemon</h1>
            <h2 className="hero-chicago">Chicago</h2>
            <p className="brand-statement">
              We are family owned Mediterranean restaurant, focused on
              traditional recipes and served with a modern twist.
            </p>
            <button>Reserve a table</button>
          </div>

          {/* Image Overlapping Section */}
          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-0 image-container position-relative">
            <img
              src={OverlapImage}
              alt="Restaurant Overlap"
              className="img-fluid overlap-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
