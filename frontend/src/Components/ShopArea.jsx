import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
const ShopArea = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");
  const [productData, setProductData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || false
  );
  const [selectedRating, setSelectedRating] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [selectedSort, setSort] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category === "false" ? false : category);
    console.log(category);
  };

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    setSelectedRating(rating === "false" ? false : rating);
    console.log(rating);
  };

  const handlePriceRangeChange = (event) => {
    const priceRange = event.target.value;
    setSelectedPriceRange(
      priceRange === "false" ? [] : priceRange.replace(/\s/g, "").split("-")
    );
    console.log(priceRange.replace(/\s/g, "").split("-"));
  };
  function Authentication(product, main_Url) {
    return localStorage.getItem("user_id") && localStorage.getItem("user_data")
      ? main_Url
      : "/sign-in.html";
  }
  const fetchMoreData = () => {
    setProductData((prevData) => [...prevData, ...totalResults.slice(0, 5)]);
    setTotalResults(totalResults.slice(5));
    console.log(totalResults.slice(5));
    if (!totalResults.slice(5).length) {
      setTotalResults(false);
    }
  };
  useEffect(() => {
    const params = {};

    if (selectedCategory) {
      params.category = selectedCategory;
    }

    if (selectedPriceRange && selectedPriceRange[0] && selectedPriceRange[1]) {
      params.price_gte = selectedPriceRange[0];
      params.price_lte = selectedPriceRange[1];
    }

    if (selectedRating) {
      params.productRating_gte = selectedRating;
    }
    if (selectedSort) {
      params._sort = selectedSort;
      params._order = "asc";
    }

    axios
      .get(`http://localhost:3001/products`, { params })
      .then((response) => {
        setProductData(response.data.slice(0, 5));
        setTotalResults(response.data.slice(5));
        console.log(response.data);
        console.log(response.data.slice(5));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedCategory, selectedPriceRange, selectedRating, selectedSort]);

  return (
    productData && (
      <div className="axil-shop-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="axil-shop-top">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="category-select">
                      <select
                        className="single-select"
                        onChange={handleCategoryChange}
                        value={selectedCategory}
                      >
                        <option value={false}>Category</option>
                        <option>Phones</option>
                        <option>Computers</option>
                        <option>Accessories</option>
                        <option>Monitors</option>
                        <option>PC Gaming</option>
                        <option>Headphones</option>
                        <option>Camera & Photo</option>
                        <option>Video Games</option>
                        <option>Sports</option>
                      </select>

                      <select
                        className="single-select"
                        onChange={handleRatingChange}
                        value={selectedRating}
                      >
                        <option value={false}>Rating</option>
                        <option value={1}>1 & Above </option>
                        <option value={2}>2 & Above</option>
                        <option value={3}>3 & Above</option>
                        <option value={4}>4 & Above</option>
                        <option value={5}>5</option>
                      </select>

                      <select
                        className="single-select"
                        onChange={handlePriceRangeChange}
                        value={`${selectedPriceRange.join(" - ") || "not"}`}
                      >
                        <option value={false}>Price Range</option>
                        <option>0 - 100</option>
                        <option>100 - 500</option>
                        <option>500 - 1000</option>
                        <option>1000 - 1500</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="category-select mt_md--10 mt_sm--10 justify-content-lg-end">
                      <select
                        className="single-select"
                        onClick={(e) =>
                          setSort(
                            e.target.value === "false" ? false : e.target.value
                          )
                        }
                      >
                        <option value={false}>Sort</option>
                        <option value={"productTitle"}>Sort by Name</option>
                        <option value={"price"}>Sort by Price</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InfiniteScroll
            className="row row--15"
            dataLength={productData.length}
            hasMore={productData.length !== totalResults}
          >
            {productData.map((product) => (
              <div key={product.id} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="axil-product product-style-one has-color-pick mt--40">
                  <div className="thumbnail">
                    <Link
                      to={Authentication(
                        product,
                        `/single-product.html/${product.id}`
                      )}
                    >
                      <img src={product.thumbnail} alt="Product Images" />
                    </Link>
                    <div className="label-block label-right">
                      <div className="product-badget">20% OFF</div>
                    </div>
                    <div className="product-hover-action">
                      <ul className="cart-action">
                        <li className="wishlist">
                          <Link
                            to={Authentication(
                              product,
                              `/wishlist.html?id=${product.id}`
                            )}
                          >
                            <i className="far fa-heart"></i>
                          </Link>
                        </li>
                        <li className="select-option">
                          <Link
                            to={Authentication(
                              product,
                              `/single-product.html/${product.id}`
                            )}
                          >
                            Add to Cart
                          </Link>
                        </li>
                        <li className="quickview">
                          <Link
                            to="/"
                            data-bs-toggle="modal"
                            data-bs-target="/quick-view-modal"
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
                        <Link
                          to={Authentication(
                            product,
                            `/single-product.html/${product.id}`
                          )}
                        >
                          {product.productTitle}
                        </Link>
                      </h5>
                      <div className="product-price-variant">
                        <span className="price current-price">
                          ${product.price}{" "}
                        </span>
                        <span className="price old-price">
                          ${product.oldPrice}
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
          </InfiniteScroll>
          <div className="text-center pt--30">
            {totalResults && (
              <Link
                className="axil-btn btn-bg-lighter btn-load-more"
                onClick={() => fetchMoreData()}
              >
                Load more
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  );
};
export default ShopArea;
