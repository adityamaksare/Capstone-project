import React from "react";
import verticalLogo from "../Assets/verticalLogo.png";

export const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#495E57" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 footer-logo">
            <img
              src={verticalLogo}
              alt="Little Lemon Logo"
              style={{ maxWidth: "162px" }}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 pt-5">
            <h6>Navigation</h6>
            <div className="navlinks d-flex flex-column">
              <a className="navlink-footer" href="">
                Home
              </a>
              <a className="navlink-footer" href="">
                About
              </a>
              <a className="navlink-footer" href="">
                Menu
              </a>
              <a className="navlink-footer" href="">
                Reservation
              </a>
              <a className="navlink-footer" href="">
                Order Online
              </a>
              <a className="navlink-footer" href="">
                Login
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 pt-5">
            <h6>Address</h6>
            <p className="navlink-footer" style={{ maxWidth: "fit-content" }}>
              456, Marine Drive,
              <br /> Churchgate <br /> Mumbai, Maharashtra <br /> 400020, India.
              <br />
              +91-9123456789 <br /> contact@littlelemon.com
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 pt-5">
            <h6>Social Media Links</h6>
            <div className="navlinks d-flex flex-column">
              <a className="navlink-footer" href="">
                Facebook
              </a>
              <a className="navlink-footer" href="">
                Instagram
              </a>
              <a className="navlink-footer" href="x.com">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
