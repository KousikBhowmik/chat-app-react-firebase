import React from "react";
import assets from "../../assets/assets.js";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src={assets.menu} className="menu-icon" />
        <img src={assets.logo} className="logo" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={assets.search} />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={assets.upload} />
        <img src={assets.more} />
        <img src={assets.notification} />
        <img src={assets.jack} className="user_icon" />
      </div>
    </nav>
  );
};

export default Navbar;
