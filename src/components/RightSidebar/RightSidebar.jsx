import React from "react";
import "./RightSidebar.css";
import assets from "../../assets/assets";
import { logOut } from "../../config/firebase";

const RightSidebar = () => {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img}  />
        <h3>Richard Sanford <img src={assets.green_dot}  /> </h3>
        <p>Hey, i am Richard Sanford using chat app</p>
      </div>
      <hr />
      <div className="rs-media">
          <p>Media</p>  
          <div>
            <img src={assets.pic1}  />
            <img src={assets.pic2}  />
            <img src={assets.pic3}  />
            <img src={assets.pic4}  />
            <img src={assets.pic1}  />
            <img src={assets.pic2}  />
          </div>
      </div>
      <button onClick={() => logOut()}>Logout</button>
    </div>
  );
};

export default RightSidebar;
