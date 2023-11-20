import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const YourWishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [user_data, setUser_data] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productParam = +queryParams.get("id");
  const wishlistItems = (user_data) => {
    const wishListArray = user_data.wishlist;
    const productIdsString = wishListArray
      .map((product) => `id=${product.product_id}`)
      .join("&");
    axios
      .get(`http://localhost:3001/products?${productIdsString}`)
      .then((response) => {
        console.log(response.data);
        setWishlist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
  const addToWishlist = (id) => {
    // Retrieve user_id and user_data
    const user_id = JSON.parse(localStorage.getItem("user_id"));

    // Fetch the user's data
    axios
      .get(`http://localhost:3001/users_data?user_id=${user_id}`)
      .then((response) => {
        const user_data = response.data[0];
        console.log(user_data);

        // Check if the product is already in the wishlist
        const existingWishlistItem = user_data.wishlist.find(
          (item) => item.product_id === id
        );

        if (!existingWishlistItem) {
          // If the product is not in the wishlist, add it as a new item
          user_data.wishlist.push({
            product_id: id,
          });
        }

        console.log(user_data);
        setUser_data(user_data);
        wishlistItems(user_data);

        // Send a PUT request to update the user's data
        axios
          .put(`http://localhost:3001/users_data/${user_data.id}`, user_data)
          .then((response) => {
            console.log("Item added to the wishlist.");
          })
          .catch((error) => {
            console.error("Error updating user data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };
  const removeItemWishlist = (product_id) => {
    // Retrieve user_id and user_data
    const user_id = JSON.parse(localStorage.getItem("user_id"));

    // Fetch the user's data
    axios
      .get(`http://localhost:3001/users_data?user_id=${user_id}`)
      .then((response) => {
        const user_data = response.data[0];

        if (user_data && user_data.wishlist) {
          // Find and remove the wishlist item with the specified product_id
          user_data.wishlist = user_data.wishlist.filter(
            (item) => item.product_id !== product_id
          );
          console.log(user_data);
          setUser_data(user_data);
          wishlistItems(user_data);
          // Send a PUT request to update the user's data
          axios
            .put(`http://localhost:3001/users_data/${user_data.id}`, user_data)
            .then((response) => {
              console.log("Item removed from the wishlist.");
              console.log(response.data);
            })
            .catch((error) => {
              console.error("Error updating user data:", error);
            });
        } else {
          console.error("User data or wishlist not found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    //getting the user_data
    axios
      .get(
        `http://localhost:3001/users_data?user_id=${JSON.parse(
          localStorage.getItem("user_id")
        )}`
      )
      .then((response) => {
        setUser_data(response.data[0]);
        wishlistItems(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    productParam && addToWishlist(productParam);
  }, []);
  return (
    <div className="axil-wishlist-area axil-section-gap">
      <div className="container">
        <div className="product-table-heading">
          <h4 className="title">My Wish List on eTrade</h4>
        </div>
        <div className="table-responsive">
          <table className="table axil-product-table axil-wishlist-table">
            <thead>
              <tr>
                <th scope="col" className="product-remove"></th>
                <th scope="col" className="product-thumbnail">
                  Product
                </th>
                <th scope="col" className="product-title"></th>
                <th scope="col" className="product-price">
                  Unit Price
                </th>
                <th scope="col" className="product-stock-status">
                  Stock Status
                </th>
                <th scope="col" className="product-add-cart"></th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr key={item.id}>
                  <td className="product-remove">
                    <a
                      href="#"
                      className="remove-wishlist"
                      onClick={() => removeItemWishlist(item.id)}
                    >
                      <i className="fal fa-times"></i>
                    </a>
                  </td>
                  <td className="product-thumbnail">
                    <a href={`single-product-.html${item.id}`}>
                      <img src={`${item.thumbnail}`} alt="Digital Product" />
                    </a>
                  </td>
                  <td className="product-title">
                    <a href={`single-product-${item.id}.html`}>
                      {item.productTitle}
                    </a>
                  </td>
                  <td className="product-price" data-title="Price">
                    <span className="currency-symbol">$</span>
                    {item.price}
                  </td>
                  <td className="product-stock-status" data-title="Status">
                    {item.stockStatus}
                  </td>
                  <td className="product-add-cart">
                    <a href="cart.html" className="axil-btn btn-outline">
                      Add to Cart
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default YourWishList;
