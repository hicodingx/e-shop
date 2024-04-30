import React, { useState } from "react";
import "./mnav.css";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  FaCaretRight,
  FaCaretUp,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function MNav({ overlay, handleOverlay }) {
  const active = "mobile-navigation-menu active has-scrollbar";
  const inactive = "mobile-navigation-menu  has-scrollbar";
  const inactiveAccordion = "accordion-menu";
  const inactiveSubCatList = "submenu-category-list";
  const [categories, setCategories] = useState({
    men: false,
    women: false,
    jewelry: false,
    perfume: false,
  });

  const [menuBottom, setMenuBottom] = useState({
    currency: false,
    language: false,
  });

  const handleCategory = (id) => {
    let previous = { ...categories };
    Object.keys(previous).forEach((key) => {
      if (key === id) {
        previous[key] = !previous[key];
      } else {
        previous[key] = false;
      }
    });

    setCategories(previous);
  };
  const handleMenuBottom = (id) => {
    const previous = { ...menuBottom };
    Object.keys(menuBottom).forEach((key) => {
      if (key === id) {
        previous[key] = !previous[key];
      } else {
        previous[key] = false;
      }
    });

    setMenuBottom(previous);
  };
  return (
    <nav className={overlay.menu ? active : inactive}>
      <div className="menu-top">
        <h2 className="menu-title">Menu</h2>

        <button
          className="menu-close-btn"
          onClick={() => handleOverlay("menu")}
        >
          <IoClose size={18} className="react-icon" />
        </button>
      </div>

      <ul className="mobile-menu-category-list">
        <li className="menu-category">
          <Link to="/" className="menu-title">
            Home
          </Link>
        </li>

        <li className="menu-category">
          <button
            className={
              categories.men
                ? `${inactiveAccordion} active`
                : `${inactiveAccordion}`
            }
            onClick={() => handleCategory("men")}
          >
            <p className="menu-title">Men's</p>
            <div>
              <IoIosAdd size={16} className="react-icon add-icon" />
              <IoIosRemove size={16} className="react-icon remove-icon" />
            </div>
          </button>

          <ul
            className={
              categories.men
                ? `${inactiveSubCatList} active`
                : `${inactiveSubCatList}`
            }
          >
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Shirt
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Shorts & Jeaans
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Safety Shoes
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Wallet
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-category">
          <button
            className={
              categories.women
                ? `${inactiveAccordion} active`
                : `${inactiveAccordion}`
            }
            onClick={() => handleCategory("women")}
          >
            <p className="menu-title">Women's</p>
            <div>
              <IoIosAdd className="react-icon add-icon" size={18} />
              <IoIosRemove className="react-icon remove-icon" size={18} />
            </div>
          </button>

          {/* Content drop for women's */}
          <ul
            className={
              categories.women
                ? `${inactiveSubCatList} active`
                : `${inactiveSubCatList}`
            }
          >
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Dress & Frock
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Earrings
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Necklace
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Makeup Kit
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-category">
          <button
            className={
              categories.jewelry
                ? `${inactiveAccordion} active`
                : `${inactiveAccordion}`
            }
            onClick={() => handleCategory("jewelry")}
          >
            <p className="menu-title">Jewelry</p>
            <div>
              <IoIosAdd className="react-icon add-icon" size={18} />
              <IoIosRemove className="react-icon remove-icon" size={18} />
            </div>
          </button>

          <ul
            className={
              categories.jewelry
                ? `${inactiveSubCatList} active`
                : `${inactiveSubCatList}`
            }
          >
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Earrings
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Couple Rings
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Necklace
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Bracelets
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-category">
          <button
            className={
              categories.perfume
                ? `${inactiveAccordion} active`
                : `${inactiveAccordion}`
            }
            onClick={() => handleCategory("perfume")}
          >
            <p className="menu-title">Perfume</p>
            <div>
              <IoIosAdd className="react-icon add-icon" size={18} />
              <IoIosRemove className="react-icon remove-icon" size={18} />
            </div>
          </button>

          <ul
            className={
              categories.perfume
                ? `${inactiveSubCatList} active`
                : `${inactiveSubCatList}`
            }
          >
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Clothes Perfume
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Deodorant
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Flower Fragrance
              </Link>
            </li>
            <li className="submenu-category">
              <Link to="/" className="submenu-title">
                Air Freshener
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-category">
          <Link to="/" className="menu-title">
            Blog
          </Link>
        </li>

        <li className="menu-category">
          <Link to="/" className="menu-title">
            Hot Offers
          </Link>
        </li>
      </ul>

      <div className="menu-bottom">
        <ul className="menu-category-list">
          <li className="menu-category">
            <button
              className={
                menuBottom.language
                  ? `${inactiveAccordion} active`
                  : `${inactiveAccordion}`
              }
              onClick={() => handleMenuBottom("language")}
            >
              <p className="menu-title">Language</p>
              <div className="caret-back">
                <FaCaretRight size={18} className="react-icon right" />
                <FaCaretUp size={18} className="react-icon up" />
              </div>
            </button>

            <ul
              className={
                menuBottom.language
                  ? `${inactiveSubCatList} active`
                  : `${inactiveSubCatList}`
              }
            >
              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  English
                </Link>
              </li>
              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Espa&ntilde;ol
                </Link>
              </li>
              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Fran&ccedil;ais
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button
              className={
                menuBottom.currency
                  ? `${inactiveAccordion} active`
                  : `${inactiveAccordion}`
              }
              onClick={() => handleMenuBottom("currency")}
            >
              <p className="menu-title">Currency</p>
              <div className="caret-back">
                <FaCaretRight size={18} className="react-icon right" />
                <FaCaretUp size={18} className="react-icon up" />
              </div>
            </button>

            <ul
              className={
                menuBottom.currency
                  ? `${inactiveSubCatList} active`
                  : `${inactiveSubCatList}`
              }
            >
              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  USD &#36;
                </Link>
              </li>
              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  EUR &euro;
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="menu-social-container">
          <li>
            <Link to="/" className="social-link">
              <FaFacebook size={22} className="react-icon" />
            </Link>
          </li>
          <li>
            <Link to="/" className="social-link">
              <FaTwitter size={22} className="react-icon" />
            </Link>
          </li>
          <li>
            <Link to="/" className="social-link">
              <FaInstagramSquare size={22} className="react-icon" />
            </Link>
          </li>
          <li>
            <Link to="/" className="social-link">
              <FaLinkedin size={22} className="react-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MNav;
