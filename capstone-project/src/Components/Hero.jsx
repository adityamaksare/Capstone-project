import React from "react";
import { useNavigate } from "react-router-dom";
import OverlapImage from "../Assets/restaurantfood.jpg";

export const Hero = () => {
  const navigate = useNavigate(); // React Router hook

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#495E57" }}>
      <div className="container hero-section p-0 ">
        <div className="row m-0">
          <div className="col-12 col-md-6 d-flex flex-column align-items-start justify-content-left p-0">
            <h1 className="m-0 little-lemon-heading mt-5 ml-5">Little Lemon</h1>
            <h2 className="hero-chicago">Chicago</h2>
            <p className="brand-statement">
              We are a family-owned Mediterranean restaurant, focused on
              traditional recipes and served with a modern twist.
            </p>
            <button onClick={() => navigate("/reservation")}>
              Reserve a table
            </button>
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

export default Hero;
