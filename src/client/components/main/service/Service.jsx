import React from "react";
import {
  IoArrowUndoOutline,
  IoBoatOutline,
  IoCallOutline,
  IoRocketOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import "./service.css";

export default function Service() {
  return (
    <div className="service">
      <h2 className="title">Our Services</h2>
      <div className="service-container">
        <Link to="/" className="service-item">
          <div className="service-icon">
            <IoBoatOutline className="react-icon" size={35} />
          </div>
          <div className="service-content">
            <h3 className="service-title">Worldwide Delivery</h3>
            <p className="service-desc">For OrdeOver 11000.00</p>
          </div>
        </Link>

        <Link to="/" className="service-item">
          <div className="service-icon">
            <IoRocketOutline className="react-icon" size={35} />
          </div>
          <div className="service-content">
            <h3 className="service-title">Next Day Delivery</h3>
            <p className="service-desc">BENIN Orders Only</p>
          </div>
        </Link>

        <Link to="/" className="service-item">
          <div className="service-icon">
            <IoCallOutline className="react-icon" size={35} />
          </div>
          <div className="service-content">
            <h3 className="service-title">Best Online Support</h3>
            <p className="service-desc">Hours: 8AM - 11PM</p>
          </div>
        </Link>

        <Link to="/" className="service-item">
          <div className="service-icon">
            <IoArrowUndoOutline className="react-icon" size={35} />
          </div>
          <div className="service-content">
            <h3 className="service-title">Return Policy</h3>
            <p className="service-desc">Easy & Return</p>
          </div>
        </Link>

        <Link to="/" className="service-item">
          <div className="service-icon">
            <IoTicketOutline className="react-icon" size={35} />
          </div>
          <div className="service-content">
            <h3 className="service-title">30% money back</h3>
            <p className="service-desc">For Order Over $1785.00</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
