import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="header_container">
          <div className="header_content">
            <Link to={"/"} className="logo">Tasty</Link>
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/add"}>Add</NavLink>
                </li>
                <li>
                  <NavLink to={"/basket"}>Basket</NavLink>
                </li>
                <li>
                  <NavLink to={"/wishlist"}>Wishlist</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
