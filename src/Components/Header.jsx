import React, { useEffect } from "react";
import NetFLix_logo from "../Utils/Netflix_Logo_PMS (1).png";
import Logo from "../Utils/Logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  
   const user = useSelector((store) => store.user); 
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    //Unsubscribe when the component unmounts  
    return()=> unsubscribe();
  }, []);
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44 " src={NetFLix_logo} alt="logo" />

{user && (
      <div className="flex p-2 items-center gap-4">
        <img className="w-12 h-12" alt="userIcon" src={Logo}/>
        <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
      </div>
      )}
    </div>
  );
};

export default Header;
