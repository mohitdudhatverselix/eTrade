import React from "react";
import { Link } from "react-router-dom";
const productItems = [
  {
    title: "Roco Wireless Headphone",
    imageSrc: "assets/images/product/product-38.png",
    price: "$49.00",
    authors: [
      "assets/images/others/author1.png",
      "assets/images/others/author2.png",
      "assets/images/others/author3.png",
      "assets/images/others/author4.png",
    ],
  },
  {
    title: "Smart Digital Watch",
    imageSrc: "assets/images/product/product-39.png",
    price: "$49.00",
    authors: [
      "assets/images/others/author1.png",
      "assets/images/others/author2.png",
      "assets/images/others/author3.png",
      "assets/images/others/author4.png",
    ],
  },
  {
    title: "Roco Wireless Headphone",
    imageSrc: "assets/images/product/product-38.png",
    price: "$49.00",
    authors: [
      "assets/images/others/author1.png",
      "assets/images/others/author2.png",
      "assets/images/others/author3.png",
      "assets/images/others/author4.png",
    ],
  },
  {
    title: "Smart Digital Watch",
    imageSrc: "assets/images/product/product-39.png",
    price: "$49.00",
    authors: [
      "assets/images/others/author1.png",
      "assets/images/others/author2.png",
      "assets/images/others/author3.png",
      "assets/images/others/author4.png",
    ],
  },
];
const Banner = () => {
  return (
    <div className="axil-main-slider-area main-slider-style-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-sm-6">
            <div className="main-slider-content">
              <div className="slider-content-activation-one">
                {productItems.map((item, index) => (
                  <div
                    key={index}
                    className="single-slide slick-slide"
                    data-sal="slide-up"
                    data-sal-delay="400"
                    data-sal-duration="800"
                  >
                    <span className="subtitle">
                      <i className="fas fa-fire"></i> Hot Deal In This Week
                    </span>
                    <h1 className="title">{item.title}</h1>
                    <div className="slide-action">
                      <div className="shop-btn">
                        <Link to="shop.html" className="axil-btn btn-bg-white">
                          <i className="fal fa-shopping-cart"></i> Shop Now
                        </Link>
                      </div>
                      <div className="item-rating">
                        <div className="thumb">
                          <ul>
                            {item.authors.map((author, authorIndex) => (
                              <li key={authorIndex}>
                                <img
                                  src={author}
                                  alt={`Author ${authorIndex + 1}`}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="content">
                          <span className="rating-icon">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fal fa-star"></i>
                          </span>
                          <span className="review-text">
                            <span>100+</span> Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-6 ">
            <div className="main-slider-large-thumb">
              <div className="slider-thumb-activation-one axil-slick-dots">
                {productItems.map((item, index) => (
                  <div
                    key={index}
                    className="single-slide slick-slide"
                    data-sal="slide-up"
                    data-sal-delay="600"
                    data-sal-duration="1500"
                  >
                    <img src={item.imageSrc} alt="Product" />
                    <div className="product-price">
                      <span className="text">From</span>
                      <span className="price-amount">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group">
        <li className="shape-1">
          <img src="assets/images/others/shape-1.png" alt="Shape" />
        </li>
        <li className="shape-2">
          <img src="assets/images/others/shape-2.png" alt="Shape" />
        </li>
      </ul>
    </div>
  );
};
export default Banner;
