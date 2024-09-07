import React from "react";
import verticalLogo from "../Assets/verticalLogo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#495E57" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 p-0 footer-logo">
            <Link to="/">
              <img
                src={verticalLogo}
                alt="Little Lemon Logo"
                style={{ maxWidth: "162px" }}
              />{" "}
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 p-0 pt-5">
            <h6>Navigation</h6>
            <div className="navlinks d-flex flex-column">
              <Link className="navlink-footer" to="/">
                Home
              </Link>
              <Link className="navlink-footer" to="/about">
                About
              </Link>
              <Link className="navlink-footer" to="/menu">
                Menu
              </Link>
              <Link className="navlink-footer" to="/reservation">
                Reservation
              </Link>
              <Link className="navlink-footer" to="/orderonline">
                Order Online
              </Link>
              <Link className="navlink-footer" to="/login">
                Login
              </Link>
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
              <Link
                className="navlink-footer"
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
              <Link
                className="navlink-footer"
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
              <Link
                className="navlink-footer"
                to="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
