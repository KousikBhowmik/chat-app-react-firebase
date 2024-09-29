import React, { useEffect, useState } from "react";
import "./profileUpdate.css";
import assets from "../../assets/assets.js";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase.js";
import { toast } from "react-toastify";
import upload from "../../lib/upload.js";

const profileUpdate = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [uid, setUid] = useState("");
  const [prevImage, setPrevImage] = useState("");

  const ProfileUpdate = async (event) => {
    event.preventDefault();
    try {
      console.log("1");
      
      if (!prevImage && !image) {
        toast.error("Upload your profile pic");
      }
      const docRef = doc(db, "users", uid);
      console.log("2");
      if (image) {
        console.log("4");
        const imgUrl = await upload(image);
        console.log("la la laa laa la la la la laaaaa")
        setPrevImage(imgUrl);
        await updateDoc(docRef, { image: imgUrl, bio: bio, name: name });
        console.log("niceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
        
      } else {
        await updateDoc(docRef, { bio: bio, name: name });
      }
    } catch (error) {}
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.data().name) {
          setName(docSnap.data().name);
        }
        if (docSnap.data().bio) {
          setBio(docSnap.data().bio);
        }
        if (docSnap.data().avatar) {
          setPrevImage(docSnap.data().avatar);
        }
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="profile">
      <div className="profile-container">
        <form onSubmit={ProfileUpdate}>
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
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="your name"
            required
          />
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="write profile bio"
          ></textarea>
          <button type="submit">Save</button>
        </form>
        <img
          className="profile-pic"
          src={image ? URL.createObjectURL(image) : assets.logo_icon}
        />
      </div>
    </div>
  );
};

export default profileUpdate;
