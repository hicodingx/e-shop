import { IoClose } from "react-icons/io5";
import toastIm from "../../assets/images/products/jewellery-1.jpg";
import "./toast.css";
import { useState } from "react";
const Toast = () => {
  const [closing, setClosing] = useState(false);
  const classNam = "notification-toast";

  return (
    <div className={closing ? `${classNam} closed` : `${classNam}`}>
      <button className="toast-close-btn" onClick={() => setClosing(true)}>
        <IoClose className="react-icon" size={20} />
      </button>

      <div className="toast-banner">
        <img src={toastIm} alt="erarrings ring" width={88} height={70} />
      </div>

      <div className="toast-detail">
        <p className="toast-message">Someone in new just bought</p>
        <p className="toast-title">Rose Gold Earrings</p>
        <p className="toast-meta">
          <time>2 Minutes</time> ago
        </p>
      </div>
    </div>
  );
};

export default Toast;
