import React from "react";
import Banner from "./banner/Banner";
import MiniatureUnderBanner from "./miniature/MinatureUnderBanner";
import SideBar from "./aside/SideBar";
import ProductMinimal from "./minimal/ProductMinimal";
import ProductFeatured from "./featured/ProductFeatured";
import ProductGrid from "./grid/ProductGrid";
import Testimonial from "./testimonial/Testimonial";
import Cta from "./cta/Cta";
import Blog from "./blog/Blog";

function Main({ overlay, handleOverlay }) {
  return (
    <main>
      <Banner />
      <MiniatureUnderBanner />

      <div className="product-container">
        <div className="container">
          <SideBar overlay={overlay} handleOverlay={handleOverlay} />

          <div className="product-box">
            <ProductMinimal />

            <ProductFeatured />

            <ProductGrid />
          </div>
        </div>
      </div>

      {/* TESTIMONIALS, CTA & SERVICE */}
      <div>
        <div className="container">
          <Testimonial />
        </div>
      </div>

      {/* Blog */}
      <Blog />
    </main>
  );
}

export default Main;
