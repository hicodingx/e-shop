import "./dnav.css";
import { Link } from "react-router-dom";

// Images
import img1 from "../../../../assets/images/electronics-banner-1.jpg";
import img2 from "../../../../assets/images/mens-banner.jpg";
import img3 from "../../../../assets/images/womens-banner.jpg";
import img4 from "../../../../assets/images/electronics-banner-2.jpg";
// end images import

const DNav = () => {
  return (
    <nav className="desktop-navigation-menu">
      <div className="container">
        <ul className="desktop-menu-category-list">
          <li className="menu-category">
            <Link to="" className="menu-title">
              Home
            </Link>
          </li>

          <li className="menu-category">
            <Link to="" className="menu-title">
              Categories
            </Link>
            <div className="dropdown-panel">
              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <Link to="">Electronics</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="">Desktop</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Laptop</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Camera</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Tablet</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Headphone</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">
                    <img
                      src={img1}
                      alt="headphone collection"
                      style={{ width: "250px", height: "119px" }}
                    />
                  </Link>
                </li>
              </ul>

              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <Link to="">Men's</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="">Formal</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Casual</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Sports</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Jackets</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Sunglasses</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">
                    <img
                      src={img2}
                      alt="headphone collection"
                      style={{ width: 250, height: 119 }}
                    />
                  </Link>
                </li>
              </ul>

              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <Link to="">Women's</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="">Formal</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Casual</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Perfume</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Cosmetics</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Bags</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">
                    <img
                      src={img3}
                      alt="headphone collection"
                      style={{ width: 250, height: 119 }}
                    />
                  </Link>
                </li>
              </ul>

              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <Link to="">Electronics</Link>
                </li>

                <li className="panel-list-item">
                  <Link to="">Smart Watch</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Smart TV</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Keyboard</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Mouse</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">Microphone</Link>
                </li>
                <li className="panel-list-item">
                  <Link to="">
                    <img
                      src={img4}
                      alt="headphone collection"
                      style={{ width: 250, height: 119 }}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-category">
            <Link to="" className="menu-title">
              Men's
            </Link>

            <ul className="dropdown-list">
              <li className="dropdown-item">
                <Link to="">Shirt</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Shorts & Jeans</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Safety Shoes</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Wallet</Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <Link to="" className="menu-title">
              Women's
            </Link>

            <ul className="dropdown-list">
              <li className="dropdown-item">
                <Link to="">Dress & Frocks</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Earrings</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Necklace</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Makeup Kit</Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <Link to="" className="menu-title">
              Jewelry
            </Link>

            <ul className="dropdown-list">
              <li className="dropdown-item">
                <Link to="">Earrings</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Couple Rings</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Necklace</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Bracelets</Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <Link to="" className="menu-title">
              Perfume
            </Link>

            <ul className="dropdown-list">
              <li className="dropdown-item">
                <Link to="">Clothes Perfume</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Deodorant</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Flower Fragrance</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Air Freshener</Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <Link to="" className="menu-title">
              Blog
            </Link>
          </li>

          <li className="menu-category">
            <Link to="" className="menu-title">
              Hot Offers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DNav;
