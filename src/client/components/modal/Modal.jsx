import { IoClose } from "react-icons/io5";
import newsImage from "../../assets/images/newsletter.png";
import "./modal.css";
import { useState } from "react";

const Modal = () => {
  const [isclosed, setIsClosed] = useState(true);

  return (
    <div className={isclosed ? "modal closed" : "modal"}>
      <div
        className="modal-close-overlay"
        onClick={() => setIsClosed(true)}
      ></div>

      <div className="modal-content">
        <button className="modal-close-btn" onClick={() => setIsClosed(true)}>
          <IoClose className="react-icon" size={16} width={70} />
        </button>

        <div className="newsletter-img">
          <img
            src={newsImage}
            alt="subscribe newsletter"
            style={{ width: "400px", height: "400px" }}
          />
        </div>

        <div className="newsletter">
          <form action="#">
            <div className="newsletter-header">
              <h3 className="newsletter-title">Subscribe to Newsletter.</h3>
              <p className="newsletter-desc">
                Subscribe to the <b>Anon</b> to get latest products and discount
                update.
              </p>
            </div>

            <input
              type="email"
              name="email"
              id="email-id"
              className="email-field"
              placeholder="Email Address"
              required
            />

            <button type="submit" className="btn-newsletter">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
