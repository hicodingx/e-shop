import React from "react";
import "./productFeatured.css";
import shampoo from "../../../assets/images/products/shampoo.jpg";
import Rating from "../../rating/Rating";
import { Link } from "react-router-dom";

export default function ProductFeatured() {
  return (
    <div className="product-featured">
      <h2 className="title">Deal of the day</h2>

      <div className="showcase-wrapper has-scrollbar">
        <div className="showcase-container">
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src={shampoo}
                alt="shampoo conditioner & facewash packs"
                className="showcase-img"
              />
            </div>

            <div className="showcase-content">
              <Rating ratingNumber={3.5} />

              <Link to="/">
                <h3 className="showcase-title">
                  shampoo, conditioner & fasewash packs
                </h3>
              </Link>

              <p className="showcase-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus voluptatem debitis pariatur ex nemo. Quidem corporis,
                dolor
              </p>

              <div className="price-box">
                <p className="price">$150.00</p>

                <del>$200.00</del>
              </div>

              <button className="add-to-cart">Add to cart</button>

              <div className="showcase-status">
                <div className="wrapper">
                  <p>
                    already sold: <b>20</b>
                  </p>

                  <p>
                    Available: <b>40</b>
                  </p>
                </div>

                <div className="showcase-status-bar"></div>
              </div>

              <div className="countdown-box">
                <p className="countdown-desc">Hury Up: Offer ends in:</p>

                <div className="countdown">
                  <div className="countdown-content">
                    <p className="display-number">360</p>
                    <p className="display-text">Days</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">24</p>
                    <p className="display-text">Hours</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">59</p>
                    <p className="display-text">Min</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">00</p>
                    <p className="display-text">Sec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-container">
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src={
                  import.meta.env.BASE_URL +
                  "assets/images/products/jewellery-1.jpg"
                }
                alt="shampoo"
                className="showcase-img"
              />
            </div>

            <div className="showcase-content">
              <Rating rating={3} />

              <h3 className="showcase-title">
                <Link to="/" className="showcase-title">
                  Rose Gold diamonds Earings
                </Link>
              </h3>

              <div className="showcase-desc">
                Lorem ipsum dolor sit amet mtyu consectetur adipisicing elit.
                Atque non cupiditate quam dolor sapiente earum
              </div>

              <div className="price-box">
                <p className="price">$1990.00</p>
                <del>$2000.00</del>
              </div>

              <button className="add-to-cart">add to cart</button>

              <div className="showcase-status">
                <div className="wrapper">
                  <p>
                    already sold: <b>15</b>
                  </p>
                  <p>
                    available: <b>40</b>
                  </p>
                </div>

                <div className="showcase-status-bar"></div>
              </div>

              <div className="countdown-box">
                <p className="countdown-desc">Harry Up! Offer ends in:</p>

                <div className="countdown">
                  <div className="countdown-content">
                    <p className="display-number">360</p>
                    <p className="display-text">Days</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">24</p>
                    <p className="display-text">Hours</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">59</p>
                    <p className="display-text">Min</p>
                  </div>

                  <div className="countdown-content">
                    <p className="display-number">00</p>
                    <p className="display-text">Sec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
