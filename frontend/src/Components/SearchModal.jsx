import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchModal = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const searchProduct = (value) => {
    setSearch(value);
    axios
      .get(`http://localhost:3001/products?q=${value}`)
      .then((res) => {
        console.log(res.data);
        if (value == "") {
          setSearchResult([]);
          return;
        }
        setSearchResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="header-search-modal" id="header-search-modal">
      <button className="card-close sidebar-close">
        <i className="fas fa-times"></i>
      </button>
      <div className="header-search-wrap">
        <div className="card-header">
          <form action="#">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                onChange={(e) => searchProduct(e.target.value)}
                name="prod-search"
                value={search}
                id="prod-search"
                placeholder="Write Something...."
              />
              <button type="submit" className="axil-btn btn-bg-primary">
                <i className="far fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="card-body">
          <div className="search-result-header">
            <h6 className="title">
              {searchResult.length
                ? `${searchResult.length} Result Found`
                : `Discover More`}{" "}
            </h6>
            <Link href="shop.html" className="view-all">
              View All
            </Link>
          </div>
          {searchResult && (
            <div className="psearch-results">
              {searchResult.map((product) => (
                <div className="axil-product-list" key={product.id}>
                  <div className="thumbnail">
                    <Link href="single-product.html">
                      <img src={product.thumbnail} alt={product.productTitle} />
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
                        <span>{product.totalReviews - 1}+ Reviews</span>
                      </span>
                    </div>
                    <h6 className="product-title">
                      <Link href="single-product.html">
                        {product.productTitle}
                      </Link>
                    </h6>
                    <div className="product-price-variant">
                      <span className="price current-price">
                        ${product.price}
                      </span>
                      <span className="price old-price">
                        ${product.oldPrice}
                      </span>
                    </div>
                    <div className="product-cart">
                      <Link href="cart.html" className="cart-btn">
                        <i className="fal fa-shopping-cart"></i>
                      </Link>
                      <Link href="wishlist.html" className="cart-btn">
                        <i className="fal fa-heart"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!searchResult && (
            <>
              <div className="axil-product-list">
                <div className="thumbnail">
                  <Link href="single-product.html">
                    <img
                      src="assets/images/product/electric/product-09.png"
                      alt="Yantiti Leather Bags"
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <span className="rating-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </span>
                    <span className="rating-number">
                      <span>100+</span> Reviews
                    </span>
                  </div>
                  <h6 className="product-title">
                    <Link href="single-product.html">Media Remote</Link>
                  </h6>
                  <div className="product-price-variant">
                    <span className="price current-price">$29.99</span>
                    <span className="price old-price">$49.99</span>
                  </div>
                  <div className="product-cart">
                    <Link href="cart.html" className="cart-btn">
                      <i className="fal fa-shopping-cart"></i>
                    </Link>
                    <Link href="wishlist.html" className="cart-btn">
                      <i className="fal fa-heart"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="axil-product-list">
                <div className="thumbnail">
                  <Link href="single-product.html">
                    <img
                      src="assets/images/product/electric/product-09.png"
                      alt="Yantiti Leather Bags"
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <span className="rating-icon">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fal fa-star"></i>
                    </span>
                    <span className="rating-number">
                      <span>100+</span> Reviews
                    </span>
                  </div>
                  <h6 className="product-title">
                    <Link href="single-product.html">Media Remote</Link>
                  </h6>
                  <div className="product-price-variant">
                    <span className="price current-price">$29.99</span>
                    <span className="price old-price">$49.99</span>
                  </div>
                  <div className="product-cart">
                    <Link href="cart.html" className="cart-btn">
                      <i className="fal fa-shopping-cart"></i>
                    </Link>
                    <Link href="wishlist.html" className="cart-btn">
                      <i className="fal fa-heart"></i>
                    </Link>
                  </div>
                </div>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchModal;
