import React, { useState } from 'react'
import './profileUpdate.css'
import assets from '../../assets/assets.js'

const profileUpdate = () => {

  const [image, setImage] = useState(false)

  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="avatar"
              accept=".png, .jpeg, jpg"
              hidden
            />
            <img
              src={image ? URL.createObjectURL(image) : assets.avatar_icon}
            />
            update image profile
          </label>
          <input type="text" placeholder="your name" required />
          <textarea placeholder="write profile bio"></textarea>
          <button type="submit">Save</button>
        </form>
        <img
          className="profile-pic"
          src={image ? URL.createObjectURL(image) : assets.logo_icon}
        />
      </div>
    </div>
  );
}

export default profileUpdate