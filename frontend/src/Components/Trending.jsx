import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Trending = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/trending`)
      .then((response) => {
        setTrendingData(response.data);
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
    if (trendingData.length > 0 && productData.length > 0) {
      const trendingProductIds = trendingData.map(
        (trending) => trending.product_id
      );

      const filteredData = productData.filter((product) =>
        trendingProductIds.includes(product.id)
      );
      setFilteredProductData(filteredData);
    }
  }, [trendingData, productData]);

  return (
    filteredProductData && (
      <div className="axil-most-sold-product axil-section-gap">
        <div className="container">
          <div className="product-area pb--50">
            <div className="section-title-wrapper section-title-center">
              <span className="title-highlighter highlighter-primary">
                <i className="fas fa-star"></i> Most Sold
              </span>
              <h2 className="title">Most Sold in eTrade Store</h2>
            </div>
            <div className="row row-cols-xl-2 row-cols-1 row--15">
              {filteredProductData.map((product) => (
                <div className="col" key={product.id}>
                  <div className="axil-product-list">
                    <div className="thumbnail">
                      <Link to={`single-product.html/${product.id}`}>
                        <img
                          data-sal="zoom-in"
                          data-sal-delay="100"
                          data-sal-duration="1500"
                          src={product.thumbnail}
                          alt={product.productTitle}
                        />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="product-rating">
                        <span className="rating-icon">
                          {[1, 2, 3, 4, 5].map((star, index) => {
                            const decimalPart =
                              product.productRating -
                              Math.floor(product.productRating);
                            const isLastStar = index === 4;
                            const isHalfStar =
                              isLastStar &&
                              decimalPart >= 0.3 &&
                              decimalPart <= 0.7;
                            const isFullStar =
                              star <= Math.floor(product.productRating);

                            return (
                              <i
                                key={star}
                                className={`fas fa-star${
                                  isHalfStar
                                    ? "-half"
                                    : isFullStar
                                    ? ""
                                    : "-empty"
                                }`}
                              ></i>
                            );
                          })}
                        </span>
                        <span className="rating-number">
                          <span>{product.totalReviews}+ Reviews</span>
                        </span>
                      </div>
                      <h6 className="product-title">
                        <Link to={`single-product.html/${product.id}`}>
                          {product.productTitle}
                        </Link>
                      </h6>
                      <div className="product-price-variant">
                        <span className="price current-price">
                          ${product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="price old-price">
                            ${product.oldPrice}
                          </span>
                        )}
                      </div>
                      <div className="product-cart">
                        <Link
                          to={`single-product.html/${product.id}`}
                          className="cart-btn"
                        >
                          <i className="fal fa-shopping-cart"></i>
                        </Link>
                        <Link
                          to={`wishlist.html?id=${product.id}`}
                          className="cart-btn"
                        >
                          <i className="fal fa-heart"></i>
                        </Link>
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
export default Trending;
