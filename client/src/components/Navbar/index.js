import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar text-light bg-dark">
      <a className="navbar-brand my-3 mx-5">Roomer</a>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
      </form>
    </nav>
  );
}

export default Navbar;
