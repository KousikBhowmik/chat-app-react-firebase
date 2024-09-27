import React from "react";
import "./ChatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img}  />
        <p>
          Richard Sanford <img src={assets.green_dot} className="dot" />
        </p>
        <img src={assets.help_icon} className="help" />
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Sned a message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} />
        </label>
        <img src={assets.send_button}  />
      </div>
    </div>
  );
};

export default ChatBox;
