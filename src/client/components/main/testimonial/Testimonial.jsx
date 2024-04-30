import React from "react";
import ban1 from "../../../assets/images/testimonial-1.jpg";
import quotation from "../../../assets/images/icons/quotes.svg";
import "./testimonial.css";
import Cta from "../cta/Cta";
import Service from "../service/Service";

export default function Testimonial() {
  return (
    <div className="testimonials-box">
      {/* Testimonials */}

      <div className="testimonial">
        <h2 className="title">testimonial</h2>

        <div className="testimonial-card">
          <img
            src={ban1}
            style={{ width: 80, height: 80 }}
            alt=""
            className="testimonial-banner"
          />

          <p className="testimonial-name">Alan Miliken</p>

          <p className="testimonial-title">CEO & Founder Invision</p>

          <img src={quotation} width={26} alt="" className="quotation-img" />

          <p className="testimonial-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, esse.
          </p>
        </div>
      </div>

      {/* CTA */}
      <Cta />
      <Service />
    </div>
  );
}
