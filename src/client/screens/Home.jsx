import { useState } from "react";
import Header from "../components/header/Header";
import Modal from "../components/modal/Modal";
import PresentToast from "../components/notification/PresentToast";
import Toast from "../components/notification/Toast";
import "./home.css";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [overlay, setOverlay] = useState({
    menu: false,
    category: false,
  });
  const active = "overlay active";
  const inactive = "overlay";

  const handleOverlay = (menuId) => {
    let previous = { ...overlay };
    Object.keys(overlay).forEach((key) => {
      if (key === menuId) {
        previous[menuId] = !previous[menuId];
      } else {
        previous[key] = false;
      }
    });
    setOverlay(previous);
  };

  return (
    <div className="home_container">
      <div
        className={
          overlay.menu || overlay.category ? `${active}` : `${inactive}`
        }
        onClick={() => handleOverlay(overlay.category || overlay.menu)}
      ></div>
      <Modal />
      <Toast />
      <PresentToast />
      <Header overlay={overlay} handleOverlay={handleOverlay} />
      <Main overlay={overlay} handleOverlay={handleOverlay} />
      <Footer />
    </div>
  );
};

export default Home;
