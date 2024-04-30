import React from "react";
import { IoBagAddOutline, IoEyeOutline, IoRepeat } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import Rating from "../../rating/Rating";
import { productGrid } from "../../../utils/data";
import "./productGrid.css";

export default function ProductGrid() {
  return (
    <div className="product-main">
      <div className="title">New Products</div>

      <div className="product-grid">
        {productGrid.map((elmt, index) => (
          <div key={index} className="showcase">
            <div className="showcase-banner">
              <img
                src={
                  import.meta.env.BASE_URL +
                  `assets/images/products/${elmt.first_img}`
                }
                alt={elmt.title}
                width={300}
                className="product-img default"
              />
              <img
                src={
                  import.meta.env.BASE_URL +
                  `assets/images/products/${elmt.second_img}`
                }
                alt={elmt.title}
                width={300}
                className="product-img hover"
              />

              {elmt.badge && (
                <p className={`showcase-badge ${elmt.badge_design}`}>
                  {elmt.badge}
                </p>
              )}

              <div className="showcase-actions">
                <div className="showcase-actions">
                  <button className="btn-action">
                    <MdFavoriteBorder className="react-icon" size={18} />
                  </button>

                  <button className="btn-action">
                    <IoEyeOutline className="react-icon" size={18} />
                  </button>

                  <button className="btn-action">
                    <IoRepeat className="react-icon" size={18} />
                  </button>

                  <button className="btn-action">
                    <IoBagAddOutline className="react-icon" size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div className="showcase-content">
              <Link to="/" className="showcase-category">
                {elmt.category}
              </Link>

              <Link to="/">
                <h3 className="showcase-title">{elmt.title}</h3>
              </Link>

              <Rating ratingNumber={elmt.rating} />

              <div className="price-box">
                <div className="price">${elmt.currentPrice}.00</div>

                <del>${elmt.delPrice}.00</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
