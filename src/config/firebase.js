import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyC_OwPGD99zwDW6R-Ii_L8bt_fRf5zbK9E",
  authDomain: "chat-app-kb.firebaseapp.com",
  projectId: "chat-app-kb",
  storageBucket: "chat-app-kb.appspot.com",
  messagingSenderId: "1072885155323",
  appId: "1:1072885155323:web:d3b9b63fa69171e655775e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const singup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const users = res.user;
    await setDoc(doc(db, "users", users.uid), {
      id: users.uid,
      username: username.toLowerCase(),
      email: email,
      name: "",
      avatar: "",
      bio: "Hey, There I am using chat app",
      lastSeen: Date.now(),
    });

    await setDoc(doc(db, "chats", users.uid), {
      chatData: [],
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logOut = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error(error)
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
    
} 

export { singup, loginUser, logOut, auth, db };
