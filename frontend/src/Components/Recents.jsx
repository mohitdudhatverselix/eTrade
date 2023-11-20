import React from "react";
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "3D™ wireless headset",
    image: "/assets/images/product/electric/product-01.png",
    oldPrice: "$30",
    currentPrice: "$30",
    discount: "20% OFF",
  },
  {
    id: 2,
    name: "Media remote",
    image: "/assets/images/product/electric/product-02.png",
    oldPrice: "$80",
    currentPrice: "$50",
    discount: "40% OFF",
  },
  {
    id: 3,
    name: "HD camera",
    image: "/assets/images/product/electric/product-03.png",
    oldPrice: "$60",
    currentPrice: "$45",
    discount: "30% OFF",
  },
  {
    id: 4,
    name: "PS Remote Control",
    image: "/assets/images/product/electric/product-04.png",
    oldPrice: "$70",
    currentPrice: "$35",
    discount: "50% OFF",
  },
  {
    id: 5,
    name: "PS5 Remote Control",
    image: "/assets/images/product/electric/product-05.png",
    oldPrice: "$50",
    currentPrice: "$38",
    discount: "25% OFF",
  },
];

const Recents = () => {
  return (
    <div className="axil-product-area bg-color-white axil-section-gap pb--50 pb_sm--30">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="title-highlighter highlighter-primary">
            <i className="far fa-shopping-basket"></i> Your Recently
          </span>
          <h2 className="title">Viewed Items</h2>
        </div>
        <div className="recent-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
          {products.map((product) => (
            <div className="slick-single-layout" key={product.id}>
              <div className="axil-product">
                <div className="thumbnail">
                  <Link to="single-product.html">
                    <img src={product.image} alt="Product Images" />
                  </Link>
                  <div className="label-block label-right">
                    <div className="product-badget">{product.discount}</div>
                  </div>
                  <div className="product-hover-action">
                    <ul className="cart-action">
                      <li className="wishlist">
                        <Link to={`/wishlist.html?id=${product.id}`}>
                          <i className="far fa-heart"></i>
                        </Link>
                      </li>
                      <li className="select-option">
                        <Link to={`/single-product.html/${product.id}`}>
                          Add to Cart
                        </Link>
                      </li>
                      <li className="quickview">
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#quick-view-modal"
                        >
                          <i className="far fa-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <div className="inner">
                    <h5 className="title">
                      <Link to={`/single-product.html/${product.id}`}>
                        {product.name}
                      </Link>
                    </h5>
                    <div className="product-price-variant">
                      <span className="price old-price">
                        {product.oldPrice}
                      </span>
                      <span className="price current-price">
                        {product.currentPrice}
                      </span>
                    </div>
                    <div className="color-variant-wrapper">
                      <ul className="color-variant">
                        <li className="color-extra-01 active">
                          <span>
                            <span className="color"></span>
                          </span>
                        </li>
                        <li className="color-extra-02">
                          <span>
                            <span className="color"></span>
                          </span>
                        </li>
                        <li className="color-extra-03">
                          <span>
                            <span className="color"></span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Recents;
