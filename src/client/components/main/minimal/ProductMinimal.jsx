import React from "react";
import { Link } from "react-router-dom";
import { productBox } from "../../../utils/data";
import "./productMinimal.css";

export default function ProductMinimal() {
  return (
    <div className="product-minimal">
      {productBox.map((elmt) => (
        <div key={elmt.title} className="product-showcase">
          <h2 className="title">{elmt.title}</h2>

          <div className="showcase-wrapper has-scrollbar">
            <div className="showcase-container">
              {elmt.list_one.map((a, index) => (
                <div key={index} className="showcase">
                  <Link to="/" className="showcase-img-box">
                    <img
                      src={
                        import.meta.env.BASE_URL +
                        `assets/images/products/${a.img}`
                      }
                      alt=""
                      className="showcase-img"
                      width={70}
                    />
                  </Link>

                  <div className="showcase-content">
                    <Link to="/">
                      <h4 className="showcase-title">{a.subtitle}</h4>
                    </Link>

                    <Link to="/" className="showcase-category">
                      {a.link}
                    </Link>

                    <div className="price-box">
                      <div className="price">${a.currentPrice}.00</div>
                      <del>${a.delPrice}.00</del>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="showcase-container">
              {elmt.list_second.map((b, index) => (
                <div key={index} className="showcase">
                  <Link to="/" className="showcase-img-box">
                    <img
                      src={
                        import.meta.env.BASE_URL +
                        `assets/images/products/${b.img}`
                      }
                      alt=""
                      className="showcase-img"
                      width={70}
                    />
                  </Link>
                  <div className="showcase-content">
                    <Link to="/">
                      <h4 className="showcase-title">{b.subtitle}</h4>
                    </Link>

                    <Link to="/" className="showcase-category">
                      {b.link}
                    </Link>

                    <div className="price-box">
                      <div className="price"> ${b.currentPrice}.00</div>
                      <del>${b.delPrice}.00</del>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
