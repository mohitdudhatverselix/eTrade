import React from "react";
import { Link } from "react-router-dom";
 const categories = [
    {
      title: "Phones",
      imgSrc: "/assets/images/product/categories/elec-4.png",
    },
    {
      title: "Computers",
      imgSrc: "/assets/images/product/categories/elec-5.png",
    },
    {
      title: "Accessories",
      imgSrc: "/assets/images/product/categories/elec-11.png",
    },
    {
      title: "Laptops",
      imgSrc: "/assets/images/product/categories/elec-6.png",
    },
    {
      title: "Monitors",
      imgSrc: "/assets/images/product/categories/elec-2.png",
    },
    {
      title: "Networking",
      imgSrc: "/assets/images/product/categories/elec-7.png",
    },
    {
      title: "PC Gaming",
      imgSrc: "/assets/images/product/categories/elec-8.png",
    },
    {
      title: "Smartwatches",
      imgSrc: "/assets/images/product/categories/elec-1.png",
    },
    {
      title: "Headphones",
      imgSrc: "/assets/images/product/categories/elec-9.png",
    },
    {
      title: "Camera & Photo",
      imgSrc: "/assets/images/product/categories/elec-10.png",
    },
    {
      title: "Video Games",
      imgSrc: "/assets/images/product/categories/elec-8.png",
    },
    {
      title: "Sports",
      imgSrc: "/assets/images/product/categories/elec-1.png",
    },
  ];
const Category = () => {
 
  return (
    <div className="axil-categorie-area bg-color-white axil-section-gapcommon">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="title-highlighter highlighter-secondary">
            <i className="far fa-tags"></i> Categories
          </span>
          <h2 className="title">Browse by Category</h2>
        </div>
        <div
          className="categrie-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
        >
          {categories.map((category, index) => (
            <div key={index}>
              <div
                className="categrie-product"
                data-sal="zoom-out"
                data-sal-delay={category.salDelay || 0}
                data-sal-duration="500"
              >
                <Link to={`/shop.html?category=${category.title}`}>
                  <img
                    className="img-fluid"
                    src={category.imgSrc}
                    alt="product category"
                  />
                  <h6 className="cat-title">{category.title}</h6>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Category;