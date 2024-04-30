import React from "react";
import "./rating.css";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export default function Rating({ ratingNumber }) {
  return (
    <div className="showcase-rating">
      <span>
        {ratingNumber >= 1 ? (
          <IoIosStar size={16} className="react-icon " />
        ) : ratingNumber >= 0.5 ? (
          <IoIosStarHalf size={16} className="react-icon " />
        ) : (
          <IoIosStarOutline size={16} className="react-icon " />
        )}
      </span>
      <span>
        {ratingNumber >= 2 ? (
          <IoIosStar size={16} className="react-icon " />
        ) : ratingNumber >= 1.5 ? (
          <IoIosStarHalf size={16} className="react-icon " />
        ) : (
          <IoIosStarOutline size={16} className="react-icon " />
        )}
      </span>
      <span>
        {ratingNumber >= 3 ? (
          <IoIosStar size={16} className="react-icon " />
        ) : ratingNumber >= 2.5 ? (
          <IoIosStarHalf size={16} className="react-icon " />
        ) : (
          <IoIosStarOutline size={16} className="react-icon " />
        )}
      </span>
      <span>
        {ratingNumber >= 4 ? (
          <IoIosStar size={16} className="react-icon " />
        ) : ratingNumber >= 3.5 ? (
          <IoIosStarHalf size={16} className="react-icon " />
        ) : (
          <IoIosStarOutline size={16} className="react-icon " />
        )}
      </span>
      <span>
        {ratingNumber >= 5 ? (
          <IoIosStar size={16} className="react-icon " />
        ) : ratingNumber >= 4.5 ? (
          <IoIosStarHalf size={16} className="react-icon " />
        ) : (
          <IoIosStarOutline size={16} className="react-icon " />
        )}
      </span>
    </div>
  );
}
