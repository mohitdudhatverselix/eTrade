import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import $ from "jquery";
const YourCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless PS Handler",
      price: 124.0,
      quantity: 1,
      subtotal: 275.0,
    },
    {
      id: 2,
      name: "Gradient Light Keyboard",
      price: 124.0,
      quantity: 1,
      subtotal: 275.0,
    },
    {
      id: 3,
      name: "HD CC Camera",
      price: 124.0,
      quantity: 1,
      subtotal: 275.0,
    },
  ]);
  const [users_data, setusers_data] = useState({});
  const [cart, setCart] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productParam = +queryParams.get("id");
  const addToCart = (id) => {
    const newCartItem = {
      product_id: id,
      quantity: 1,
    };

    const user_id = JSON.parse(localStorage.getItem("user_id"));
    axios
      .get(`http://localhost:3001/users_data?user_id=${user_id}`)
      .then((response) => {
        const user_data = response.data[0];
        const existingCartItem = user_data.cart.find(
          (item) => item.product_id === id
        );

        if (existingCartItem) {
          existingCartItem.quantity += 1;
        } else {
          user_data.cart.push(newCartItem);
        }
        cartProducts(user_data);
        setusers_data(user_data);

        axios
          .put(`http://localhost:3001/users_data/${user_data.id}`, user_data)
          .then((response) => {
            alert("Item added from the cart.");
          })
          .catch((error) => {
            console.error("Error updating user data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const cartProducts = (users_data) => {
    const cartArray = users_data.cart;
    const productIdsString = cartArray
      .map((product) => `id=${product.product_id}`)
      .join("&");
    axios
      .get(`http://localhost:3001/products?${productIdsString}`)
      .then((response) => {
        const productData = response.data;

        setCart(!productData.leanth ? productData : false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/users_data?user_id=${JSON.parse(
          localStorage.getItem("user_id")
        )}`
      )
      .then((response) => {
        setusers_data(response.data[0]);
        cartProducts(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    addToCart(productParam);
  }, []);
  const removeItemCart = (product_id) => {
    // Retrieve user_id and user_data
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    // Fetch the user's data
    axios
      .get(`http://localhost:3001/users_data?user_id=${user_id}`)
      .then((response) => {
        const user_data = response.data[0];

        // Find and remove the cart item with the specified product_id
        user_data.cart = user_data.cart.filter(
          (item) => item.product_id !== product_id
        );
        console.log(user_data);
        cartProducts(user_data);

        // Send a PUT request to update the user's data
        axios
          .put(`http://localhost:3001/users_data/${user_data.id}`, user_data)
          .then((response) => {
            console.log("Item removed from the cart.");
          })
          .catch((error) => {
            console.error("Error updating user data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  return (
    cart && (
      <div className="axil-product-cart-area axil-section-gap">
        <div className="container">
          <div className="axil-product-cart-wrap">
            <div className="product-table-heading">
              <h4 className="title">Your Cart</h4>
              <a href="#" className="cart-clear">
                Clear Shopping Cart
              </a>
            </div>
            <div className="table-responsive">
              <table className="table axil-product-table axil-cart-table mb--40">
                <thead>
                  <tr>
                    <th scope="col" className="product-remove"></th>
                    <th scope="col" className="product-thumbnail">
                      Product
                    </th>
                    <th scope="col" className="product-title"></th>
                    <th scope="col" className="product-price">
                      Price
                    </th>
                    <th scope="col" className="product-quantity">
                      Quantity
                    </th>
                    <th scope="col" className="product-subtotal">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart &&
                    cart.map((item) => (
                      <tr key={item.id}>
                        <td className="product-remove">
                          <a
                            href="#"
                            className="remove-wishlist"
                            onClick={() => removeItemCart(item.id)}
                          >
                            <i className="fal fa-times"></i>
                          </a>
                        </td>
                        <td className="product-thumbnail">
                          <a href={`single-product.html/${item.id}`}>
                            <img
                              src={`${item.thumbnail}`}
                              alt="Digital Product"
                            />
                          </a>
                        </td>
                        <td className="product-title">
                          <a href={`single-product.html/${item.id}`}>
                            {item.productTitle}
                          </a>
                        </td>
                        <td className="product-price" data-title="Price">
                          <span className="currency-symbol">$</span>
                          {item.price}
                        </td>
                        <td className="product-quantity" data-title="Qty">
                          <div className="pro-qty">
                            <input
                              type="number"
                              className="quantity-input"
                              value={
                                users_data.cart.find(
                                  (cartItems) =>
                                    cartItems.product_id === item.id
                                )["quantity"]
                              }
                              onChange={() => console.log("ok")}
                            />
                          </div>
                        </td>
                        <td className="product-subtotal" data-title="Subtotal">
                          <span className="currency-symbol">$</span>
                          {item.price *
                            users_data.cart.find(
                              (cartItems) => cartItems.product_id === item.id
                            )["quantity"]}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="cart-update-btn-area">
              <div className="input-group product-cupon">
                <input placeholder="Enter coupon code" type="text" />
                <div className="product-cupon-btn">
                  <button type="submit" className="axil-btn btn-outline">
                    Apply
                  </button>
                </div>
              </div>
              <div className="update-btn">
                <a href="#" className="axil-btn btn-outline">
                  Update Cart
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-5 col-lg-7 offset-xl-7 offset-lg-5">
                <div className="axil-order-summery mt--80">
                  <h5 className="title mb--20">Order Summary</h5>
                  <div className="summery-table-wrap">
                    <table className="table summery-table mb--30">
                      <tbody>
                        <tr className="order-subtotal">
                          <td>Subtotal</td>
                          <td>
                            $
                            {cart
                              .reduce(
                                (total, item) =>
                                  total +
                                  item.price *
                                    users_data.cart.find(
                                      (cartItems) =>
                                        cartItems.product_id === item.id
                                    )["quantity"],
                                0
                              )
                              .toFixed(2)}
                          </td>
                        </tr>
                        <tr className="order-shipping">
                          <td>Shipping</td>
                          <td>
                            <div className="input-group">
                              <input
                                type="radio"
                                id="radio1"
                                name="shipping"
                                defaultChecked
                              />
                              <label htmlFor="radio1">Free Shipping</label>
                            </div>
                            <div className="input-group">
                              <input type="radio" id="radio2" name="shipping" />
                              <label htmlFor="radio2">Local: $35.00</label>
                            </div>
                            <div className="input-group">
                              <input type="radio" id="radio3" name="shipping" />
                              <label htmlFor="radio3">Flat rate: $12.00</label>
                            </div>
                          </td>
                        </tr>
                        <tr className="order-tax">
                          <td>State Tax</td>
                          <td>$8.00</td>
                        </tr>
                        <tr className="order-total">
                          <td>Total</td>
                          <td className="order-total-amount">
                            $
                            {(
                              cart.reduce(
                                (total, item) =>
                                  total +
                                  item.price *
                                    users_data.cart.find(
                                      (cartItems) =>
                                        cartItems.product_id === item.id
                                    )["quantity"],
                                0
                              ) + 8.0
                            ).toFixed(2) || 0}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <a
                    href="checkout.html"
                    className="axil-btn btn-bg-primary checkout-btn"
                  >
                    Process to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default YourCart;
