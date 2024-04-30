import { IoClose } from "react-icons/io5";
import "./presentToast.css";
import { BiSolidBellRing } from "react-icons/bi";
import { useState } from "react";
const PresentToast = () => {
  const [closing, setClosing] = useState(false);
  const classNam = "present-toast";
  return (
    <div className={closing ? `${classNam} closed` : `${classNam}`}>
      <button
        className="present-toast-close-btn"
        onClick={() => setClosing(true)}
      >
        <IoClose className="react-icon" size={16} />
      </button>
      <div className="present-toast-detail">
        <p className="present-toast-title">Félicitations, Hippolyte</p>
        <p className="present-toast-message">
          Vous etes le gagnant du iphone 15
        </p>
      </div>
      <div className="toast-ring-wrapper">
        <button className="present-toast-btn">
          <BiSolidBellRing className="react-icon" size={22} color="black" />
        </button>

        <div className="notification-number">
          <p className="number">3</p>
        </div>
      </div>
    </div>
  );
};

export default PresentToast;
