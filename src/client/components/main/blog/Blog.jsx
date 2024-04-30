import React from "react";
import { blog } from "../../../utils/data";
import { Link } from "react-router-dom";
import "./blog.css";

export default function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-container has-scrollbar">
          {blog.map((elmt, index) => (
            <div key={index} className="blog-card">
              <Link to="/">
                <img
                  src={import.meta.env.BASE_URL + `assets/images/${elmt.img}`}
                  width={300}
                  alt={elmt.title}
                  className="blog-banner"
                />
              </Link>

              <div className="blog-content">
                <Link to="/" className="blog-category">
                  {elmt.category}
                </Link>

                <Link to="/">
                  <h3 className="blog-title">{elmt.title}</h3>
                </Link>

                <p className="blog-meta">
                  By <cite>{elmt.owner}</cite> / <span>{elmt.date}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
