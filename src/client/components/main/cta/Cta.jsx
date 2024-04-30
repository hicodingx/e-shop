import React from "react";
import "./cta.css";
import ban from "../../../assets/images/cta-banner.jpg";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <div className="cta-container">
      <img src={ban} alt="" className="cta-banner" />

      <Link to="/" className="cta-content">
        <p className="discount">25% Discount</p>

        <h2 className="cta-title">Summer collection</h2>

        <p className="cta-text">Starting @ $10.00</p>

        <button className="cta-btn">Acheter</button>
      </Link>
    </div>
  );
}
