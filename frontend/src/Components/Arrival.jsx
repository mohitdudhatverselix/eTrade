import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Arrival = () => {
  const [arrivalData, setArrivalData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/arrivals`)
      .then((response) => {
        setArrivalData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    axios
      .get(`http://localhost:3001/products`)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    if (arrivalData.length > 0 && productData.length > 0) {
      const arrivalProductIds = arrivalData.map(
        (arrival) => arrival.product_id
      );
      const filteredData = productData.filter((product) =>
        arrivalProductIds.includes(product.id)
      );
      setFilteredProductData(filteredData);
    }
  }, [arrivalData, productData]);

  return (
    filteredProductData && (
      <div className="axil-new-arrivals-product-area bg-color-white axil-section-gap pb--0">
        <div className="container">
          <div className="product-area pb--50">
            <div className="section-title-wrapper">
              <span className="title-highlighter highlighter-primary">
                <i className="far fa-shopping-basket"></i>This Week’s
              </span>
              <h2 className="title">New Arrivals</h2>
            </div>
            <div className="new-arrivals-product-activation slick-layout-wrapper--30 axil-slick-arrow arrow-top-slide">
              {filteredProductData.map((product) => (
                <div className="slick-single-layout" key={product.id}>
                  <div className="axil-product product-style-two">
                    <div className="thumbnail">
                      <Link to={`single-product.html/${product.id}`}>
                        <img
                          data-sal="zoom-out"
                          data-sal-delay="200"
                          data-sal-duration="500"
                          src={product.thumbnail}
                          alt="Product Images"
                        />
                      </Link>
                      {product.discount && (
                        <div className="label-block label-right">
                          <div className="product-badget">
                            {product.discount.discountText}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="product-content">
                      <div className="inner">
                        <h5 className="title">
                          <Link to="single-product.html">
                            {product.productTitle}
                          </Link>
                        </h5>
                        <div className="product-price-variant">
                          {product.oldPrice && (
                            <span className="price old-price">
                              ${product.oldPrice}
                            </span>
                          )}
                          <span className="price current-price">
                            ${product.price}
                          </span>
                        </div>
                        <div className="product-hover-action">
                          <ul className="cart-action">
                            <li className="quickview">
                              <Link
                                to="/"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view-modal"
                              >
                                <i className="far fa-eye"></i>
                              </Link>
                            </li>
                            <li className="select-option">
                              <Link to={`single-product.html/${product.id}`}>
                                Add to Cart
                              </Link>
                            </li>
                            <li className="wishlist">
                              <Link to={`wishlist.html?id=${product.id}`}>
                                <i className="far fa-heart"></i>
                              </Link>
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
      </div>
    )
  );
};
export default Arrival;
