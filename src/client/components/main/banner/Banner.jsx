import React from "react";
import { Link } from "react-router-dom";
import { banner } from "../../../utils/data";
import "./banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          {banner.map((item) => (
            <div key={item.ban_title} className="slider-item">
              <img
                src={import.meta.env.BASE_URL + `assets/images/${item.img}`}
                alt=""
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">{item.ban_title}</p>

                <h2 className="banner-title">{item.ban_sub}</h2>

                <p className="banner-text">
                  Starting at $<b>{item.price}</b>.00
                </p>

                <Link className="banner-btn" to="/">
                  {item.text_link}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
