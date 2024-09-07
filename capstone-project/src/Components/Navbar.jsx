import React from "react";
import Logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white container">
      <Link className="navbar-brand" to="/">
        <img
          src={Logo} // Replace with the path to your logo
          alt="Little Lemon logo"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav container-fluid d-flex justify-content-evenly">
          <li className="nav-item m-2">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="nav-link" to="/reservations">
              Reservations
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="nav-link" to="/orderonline">
              Order Online
            </Link>
          </li>
          <li className="nav-item m-2">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
