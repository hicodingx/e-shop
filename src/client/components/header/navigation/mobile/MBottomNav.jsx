import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import "./mBottomNav.css";
import {
  IoBagHandleOutline,
  IoGridOutline,
  IoHomeOutline,
} from "react-icons/io5";

function MBottomNav({ handleOverlay }) {
  return (
    <div className="mobile-bottom-navigation">
      <button className="action-btn" onClick={() => handleOverlay("menu")}>
        <IoIosMenu size={22} className="react-icon" />
      </button>

      <button className="action-btn">
        <IoBagHandleOutline size={22} className="react-icon" />
        <span className="count">0</span>
      </button>

      <button className="action-btn">
        <IoHomeOutline size={22} className="react-icon" />
      </button>

      <button className="action-btn">
        <FaRegHeart size={22} className="react-icon" />
        <span className="count">0</span>
      </button>

      <button className="action-btn" onClick={() => handleOverlay("category")}>
        <IoGridOutline size={22} className="react-icon" />
      </button>
    </div>
  );
}

export default MBottomNav;
