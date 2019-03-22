import React from "react";
import "./style.css";


function Navbar() {
  return (
    <nav className="navbar text-light home">
    <div className="d-flex flex-row logo">
      <img src={require("../../images/hotel.png")} className="image" alt="thumbnail"></img>
      <a className="navbar-brand mx-3">Roomer</a>
      </div>
    </nav>
  );
}

export default Navbar;
