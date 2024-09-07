import React from "react";
import Logo from "../Assets/Logo.svg";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white container">
      <a className="navbar-brand" href="/">
        <img
          src={Logo} // Replace with the path to your logo
          alt="Little Lemon logo"
        />
      </a>
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
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="/menu">
              Menu
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="/reservations">
              Reservations
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="/order-online">
              Order Online
            </a>
          </li>
          <li className="nav-item m-2">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
