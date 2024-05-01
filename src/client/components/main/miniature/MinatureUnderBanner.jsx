import React from "react";
import "./_m-style.css";
import { minimalUnderBanner } from "../../../utils/data";
import { Link } from "react-router-dom";

export default function MiniatureUnderBanner() {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {minimalUnderBanner.map((product) => (
            <div key={product.name} className="category-item">
              <div className="category-img-box">
                <img
                  src={
                    import.meta.env.BASE_URL +
                    `assets/images/icons/${product.img}`
                  }
                  alt={product.name}
                  width={30}
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <div>
                    <h3 className="category-item-title">{product.name}</h3>
                    <Link to="/" className="category-btn">
                      Voir plus
                    </Link>
                  </div>

                  <p className="category-item-amount">
                    ({product.countInStock})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
