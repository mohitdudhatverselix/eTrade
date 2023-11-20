import React, { useEffect, useRef } from "react";
import WooCommerce from "./WooCommerce";
import $ from "jquery"; // Import jQuery
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
const SingleProduct = () => {
  const smallThumbRef = useRef(null);
  const largeThumbRef = useRef(null);
  const [productData, setProductData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch product data
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        setProductData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {productData && (
        <div className="axil-single-product-area axil-section-gap pb--0 bg-color-white">
          <div className="single-product-thumb mb--40">
            <div className="container">
              <div className="row">
                {productData.images && productData.images.length > 0 && (
                  <div className="col-lg-7 mb--40">
                    <div className="row">
                      <div className="col-lg-10 order-lg-2">
                        <div className="single-product-thumbnail-wrap zoom-gallery">
                          <div
                            className="single-product-thumbnail product-large-thumbnail-3 axil-product"
                            ref={largeThumbRef}
                          >
                            {productData.images.map((image, index) => (
                              <div className="thumbnail" key={index}>
                                <Link to={image} className="popup-zoom">
                                  <img src={image} alt="Product Images" />
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className="label-block">
                            <div className="product-badget">
                              {productData.discount &&
                                productData.discount.discountText}
                            </div>
                          </div>
                          <div className="product-quick-view position-view">
                            <Link
                              to={productData.images[0]}
                              className="popup-zoom"
                            >
                              <i className="far fa-search-plus"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 order-lg-1">
                        <div
                          className="product-small-thumb-3 small-thumb-wrapper"
                          ref={smallThumbRef}
                        >
                          {productData.images.map((image, index) => (
                            <div className="small-thumb-img" key={index}>
                              <img src={image} alt="thumb" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-lg-5 mb--40">
                  <div className="single-product-content">
                    <div className="inner">
                      <h2 className="product-title">
                        {productData.productTitle}
                      </h2>
                      <span className="price-amount">
                        ${productData.price}&nbsp;&nbsp;&nbsp;
                        <del
                          style={{
                            color: "#d6d6d6",
                            textDecoration: "line-through",
                            marginLeft: "0",
                          }}
                        >
                          ${productData.oldPrice}
                        </del>
                      </span>
                      <div className="product-rating">
                        <div className="star-rating">
                          {Array.from({
                            length: productData.productRating,
                          }).map((_, index) => (
                            <i key={index} className="fas fa-star"></i>
                          ))}
                          {Array.from({
                            length: 5 - productData.productRating,
                          }).map((_, index) => (
                            <i key={index} className="far fa-star"></i>
                          ))}
                        </div>
                        <div className="review-link">
                          <Link to="/">
                            (<span>{productData.totalReviews}</span> customer
                            reviews)
                          </Link>
                        </div>
                      </div>
                      <ul className="product-meta">
                        <li>
                          <i className="fal fa-check"></i>
                          {productData.isProductInStock
                            ? "In stock"
                            : "Out of stock"}
                        </li>
                        <li>
                          <i className="fal fa-check"></i>
                          {productData.isFreeDeliveryAvailable
                            ? "Free delivery available"
                            : "Delivery charges apply"}
                        </li>
                        <li>
                          <i className="fal fa-check"></i>
                          {productData.discount
                            ? `Sales ${productData.discount.discountText} Use Code: ${productData.discountCode}`
                            : ""}
                        </li>
                      </ul>
                      <p className="description">{productData.description}</p>
                      <div className="product-variations-wrapper">
                        <div className="product-variation">
                          <h6 className="title">Colors:</h6>
                          <div className="color-variant-wrapper">
                            <ul className="color-variant">
                              {productData.colors &&
                                productData.colors.map((color, index) => (
                                  <li
                                    key={index}
                                    className={`color-extra-0${index + 1} ${
                                      index === 0 ? "active" : ""
                                    }`}
                                  >
                                    <span>
                                      <span
                                        className="color"
                                        style={{ backgroundColor: color }}
                                      ></span>
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                        <div className="product-variation product-size-variation">
                          <h6 className="title">Size:</h6>
                          <ul className="range-variant">
                            {productData.sizes &&
                              productData.sizes.map((size, index) => (
                                <li key={index}>{size}</li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      <div className="product-action-wrapper d-flex-center">
                        <div className="pro-qty">
                          <input type="text" defaultValue="1" />
                        </div>
                        <ul className="product-action d-flex-center mb--0">
                          <li className="add-to-cart">
                            <Link
                              to={`/cart.html?id=${productData.id}`}
                              className="axil-btn btn-bg-primary"
                            >
                              Add to Cart
                            </Link>
                          </li>
                          <li className="wishlist">
                            <Link
                              to={`/wishlist.html?id=${productData.id}`}
                              className="axil-btn wishlist-btn"
                            >
                              <i className="far fa-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <WooCommerce />
    </div>
  );
};

export default SingleProduct;
