import React from "react";
import "./ChatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} />
        <p>
          Richard Sanford <img src={assets.green_dot} className="dot" />
        </p>
        <img src={assets.help_icon} className="help" />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">Lorem ipsum dolor sit amet.</p>
          <div>
            <img src={assets.profile_img}  />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="s-msg">
          <img className="msg-img" src={assets.pic1}  />
          <div>
            <img src={assets.profile_img}  />
            <p>2:30 PM</p>
          </div>
        </div>



        <div className="r-msg">
          <p className="msg">Lorem ipsum dolor sit amet.</p>
          <div>
            <img src={assets.profile_img}  />
            <p>2:30 PM</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Sned a message" />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} />
        </label>
        <img src={assets.send_button} />
      </div>
    </div>
  );
};

export default ChatBox;
