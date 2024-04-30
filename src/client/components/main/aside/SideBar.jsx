import React, { useState } from "react";
import "./sidebar.css";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { sideCategory } from "../../../utils/data";
import Rating from "../../rating/Rating";
import { sideProducts } from "../../../utils/data";

export default function SideBar({ overlay, handleOverlay }) {
  const [categories, setCategories] = useState({
    clothe: false,
    footwear: false,
    jewelry: false,
    perfume: false,
    cosmetic: false,
    glasse: false,
    bag: false,
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

  const inactiveAccordion = "sidebar-accordion-menu";
  const inactiveCatList = "sidebar-submenu-category-list";
  const inactiveSidebar = "sidebar has-scrollbar";

  return (
    <div
      className={
        overlay.category ? `${inactiveSidebar} active` : `${inactiveSidebar}`
      }
    >
      <div className="sidebar-category">
        <div className="sidebar-top">
          <h2 className="sidebar-title">Category</h2>

          <button
            className="sidebar-close-btn"
            onClick={() => handleOverlay("category")}
          >
            <IoClose size={22} color="hsl(0, 0%, 27%)" className="react-icon" />
          </button>
        </div>

        <ul className="sidebar-menu-category-list">
          {sideCategory.map((element, index) => (
            <li key={element.title} className="sidebar-menu-category">
              <button
                className={
                  categories[element.ind]
                    ? `${inactiveAccordion} active`
                    : `${inactiveAccordion}`
                }
                onClick={() => handleCategory(element.ind)}
              >
                <div className="menu-title-flex">
                  <img
                    src={
                      import.meta.env.BASE_URL +
                      `assets/images/icons/${element.cat_img}`
                    }
                    alt={element.title}
                    className="menu-title-img"
                    style={{ width: 20, height: 20 }}
                  />

                  <div className="menu-title">{element.title}</div>
                </div>

                <div>
                  <IoIosAdd size={16} className="react-icon add-icon" />
                  <IoIosRemove size={16} className="react-icon remove-icon" />
                </div>
              </button>

              <ul
                className={
                  categories[element.ind]
                    ? `${inactiveCatList} active`
                    : `${inactiveCatList}`
                }
              >
                {element.nested.map((sub_element) => (
                  <li
                    key={sub_element.product_name}
                    className="sidebar-submenu-category"
                  >
                    <Link to="/" className="sidebar-submenu-title">
                      <p className="product-name">{sub_element.product_name}</p>

                      <div className="stock">{sub_element.product_number}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="product-showcase">
        <h3 className="showcase-heading">best sellers</h3>

        <div className="showcase-wrapper">
          <div className="showcase-container">
            {sideProducts.map((element) => (
              <div key={element.title} className="showcase">
                <a href="" className="showcase-img-box">
                  <img
                    src={
                      import.meta.env.BASE_URL +
                      `assets/images/products/${element.img}`
                    }
                    alt={element.title}
                    className="showcase-img"
                    style={{ width: 75, height: 75 }}
                  />
                </a>

                <div className="showcase-content">
                  <a href="">
                    <h4 className="showcase-title">{element.title}</h4>
                  </a>

                  <Rating ratingNumber={element.rating} />

                  <div className="price-box">
                    <del>{element.delPrice}.00</del>
                    <p className="price">{element.currentPrice}.00</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
