import React from "react";
import "./header.css";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import { IoBagHandleOutline, IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import DNav from "./navigation/desktop/DNav";
import MBottomNav from "./navigation/mobile/MBottomNav";
import MNav from "./navigation/mobile/MNav";

export default function Header({ overlay, handleOverlay }) {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <Link to="/" className="social-link">
                <FaFacebook className="react-icon" size={16} />
              </Link>
            </li>
            <li>
              <Link to="/" className="social-link">
                <FaTwitter className="react-icon" size={16} />
              </Link>
            </li>
            <li>
              <Link to="/" className="social-link">
                <FaInstagramSquare className="react-icon" size={16} />
              </Link>
            </li>
            <li>
              <Link to="/" className="social-link">
                <FaLinkedin className="react-icon" size={16} />
              </Link>
            </li>
          </ul>

          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b>
              This Week Order Over -$55
            </p>
          </div>

          <div className="header-top-actions">
            <select name="currency" id="">
              <option value="usd">USD &dollar;</option>
              <option value="eur">EUR &euro;</option>
            </select>
            <select name="language" id="">
              <option value="en-Us">English;</option>
              <option value="es-Es">Espa&ntilde;ol</option>
              <option value="fr-FR">French</option>
            </select>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo">
            <img src={logo} alt="logo" style={{ width: 120, height: 36 }} />
          </a>

          <div className="header-search-container">
            <input
              type="search"
              name="search"
              id=""
              className="search-field"
              placeholder="Rechercher un produit...."
            />
            <button className="search-btn">
              <FaSearch className="react-icon" size={15} />
            </button>
          </div>

          {/* Not visible in mobile */}
          <div className="header-user-actions">
            <button className="action-btn">
              <IoPersonOutline className="react-icon" size={25} />
            </button>
            <button className="action-btn">
              <CiHeart className="react-icon" size={25} />
              <span className="count">0</span>
            </button>
            <button className="action-btn">
              <IoBagHandleOutline className="react-icon" size={25} />
              <span className="count">0</span>
            </button>
          </div>
          {/* end not visible */}
        </div>
      </div>

      <DNav />
      <MBottomNav handleOverlay={handleOverlay} />
      <MNav overlay={overlay} handleOverlay={handleOverlay} />
    </header>
  );
}
