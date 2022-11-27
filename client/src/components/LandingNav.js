import React from "react";
import { TiThMenu } from "react-icons/ti";
import { useGlobalContext } from "../context/UserContext";
const LandingNav = () => {
  const { toggleNav } = useGlobalContext();
  return (
    <header className="header ">
      <div className=" container flex justify-between items-center p-4">
        {/* <div className="logo">
          <img src="./assets/logo.png" alt="" className="logo" />
        </div> */}
        {/* <div className="pt-4"> */}
        <p className=""></p>
        {/* </div> */}
        <div className=" title">QuickDataLoad</div>
        <div onClick={() => toggleNav()} className="hamburger ">
          <TiThMenu />
        </div>
        <div className="big__nav">big nav</div>
      </div>
    </header>
  );
};

export default LandingNav;
