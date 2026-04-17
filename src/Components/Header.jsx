import React from "react";
import NetFLix_logo from "../Utils/Netflix_Logo_PMS (1).png";
import Logo from "../Utils/Logo.png";

const Header = () => {
  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44 " src={NetFLix_logo} alt="logo" />

      <div className="flex p-2 items-center gap-4">
        <img className="w-12 h-12" alt="userIcon" src={Logo} />
        <button className="font-bold text-white">Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
