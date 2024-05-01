import React from "react";
import { footerCategoryLink, footerNavLink } from "../../utils/data";
import { Link } from "react-router-dom";
import "./footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer>
      <div className="footer-category">
        <div className="container">
          <h2 className="footer-category-title">Brand directory</h2>

          {footerCategoryLink.map((elmt, index) => (
            <div key={index} className="footer-category-box">
              <h3 className="category-box-title">{elmt.title} : </h3>

              {elmt.links.map((el, index) => {
                return (
                  <Link key={index} to="/" className="footer-category-link">
                    {el}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-nav">
        <div className="container">
          {footerNavLink.map((navItem, index) => (
            <ul key={index} className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">{navItem.nav_title}</h2>
              </li>
              {navItem.link.map((navLink, idx) => (
                <li key={idx} className="footer-nav-item">
                  <Link to="/" className="footer-nav-link">
                    {navLink}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Contact</h2>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <IoLocationOutline size={30} className="react-icon" />
              </div>

              <address className="content">
                419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
              </address>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <IoCallOutline size={20} className="react-icon" />
              </div>

              <a href="tel:+607936-8058" className="footer-nav-link">
                (607) 936-8058
              </a>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <IoMailOutline size={20} className="react-icon" />
              </div>

              <a href="mailto:example@gmail.com" className="footer-nav-link">
                example@gmail.com
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Follow Us</h2>
            </li>

            <li className="footer-nav-item">
              <ul className="social-link">
                <li className="footer-nav-item">
                  <Link to="/" className="footer-nav-link">
                    <FaFacebook size={25} className="react-icon" />
                  </Link>
                </li>

                <li className="footer-nav-item">
                  <Link to="/" className="footer-nav-link">
                    <FaTwitter size={25} className="react-icon" />
                  </Link>
                </li>

                <li className="footer-nav-item">
                  <Link to="/" className="footer-nav-link">
                    <FaLinkedin size={25} className="react-icon" />
                  </Link>
                </li>

                <li className="footer-nav-item">
                  <Link to="/" className="footer-nav-link">
                    <FaInstagram size={25} className="react-icon" />
                  </Link>
                </li>

                <li className="footer-nav-item">
                  <Link to="/" className="footer-nav-link">
                    <FaWhatsapp size={25} className="react-icon" />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <img
            src={import.meta.env.BASE_URL + "assets/images/payment.png"}
            alt="payment method"
            className="payment-img"
          />

          <p className="copyright">
            Copyright &copy; <Link to="/">Anon</Link> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
