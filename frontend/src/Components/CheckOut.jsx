import React, { useState } from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
  const [selectedShippingMethod, setSelectedShippingMethod] =
    useState("Free Shipping");

  const handleShippingMethodChange = (event) => {
    setSelectedShippingMethod(event.target.value);
  };

  const handleLoginClick = () => {
    // Add your login functionality here.
  };

  const handleApplyCouponClick = () => {
    // Add your coupon code application functionality here.
  };

  return (
    <div className="axil-checkout-area axil-section-gap">
      <div className="container">
        <form action="#">
          <div className="row">
            <div className="col-lg-6">
              <div className="axil-checkout-notice">
                <div className="axil-toggle-box">
                  <div className="toggle-bar">
                    <i className="fas fa-user"></i> Returning customer?{" "}
                    <Link className="toggle-btn" onClick={handleLoginClick}>
                      Click here to login <i className="fas fa-angle-down"></i>
                    </Link>
                  </div>
                  <div className="axil-checkout-login toggle-open">
                    <p>If you haven't logged in, please log in first.</p>
                    <div className="signin-box">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                        />
                      </div>
                      <div className="form-group mb--0">
                        <button
                          type="button"
                          className="axil-btn btn-bg-primary submit-btn"
                          onClick={handleLoginClick}
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="axil-toggle-box">
                  <div className="toggle-bar">
                    <i className="fas fa-pencil"></i> Have a coupon?{" "}
                    <Link
                      className="toggle-btn"
                      onClick={handleApplyCouponClick}
                    >
                      Click here to enter your code{" "}
                      <i className="fas fa-angle-down"></i>
                    </Link>
                  </div>
                  <div className="axil-checkout-coupon toggle-open">
                    <p>If you have a coupon code, please apply it below.</p>
                    <div className="input-group">
                      <input placeholder="Enter coupon code" type="text" />
                      <div className="apply-btn">
                        <button
                          type="button"
                          className="axil-btn btn-bg-primary"
                          onClick={handleApplyCouponClick}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="axil-checkout-billing">
                <h4 className="title mb--40">Billing details</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        First Name <span>*</span>
                      </label>
                      <input type="text" id="first-name" placeholder="Adam" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Last Name <span>*</span>
                      </label>
                      <input type="text" id="last-name" placeholder="John" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" id="company-name" />
                </div>
                <div className="form-group">
                  <label>
                    Country/ Region <span>*</span>
                  </label>
                  <select id="Region">
                    <option value="3">Australia</option>
                    <option value="4">England</option>
                    <option value="6">New Zealand</option>
                    <option value="5">Switzerland</option>
                    <option value="1">United Kingdom (UK)</option>
                    <option value="2">United States (USA)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    Street Address <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="address1"
                    className="mb--15"
                    placeholder="House number and street name"
                  />
                  <input
                    type="text"
                    id="address2"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Town/ City <span>*</span>
                  </label>
                  <input type="text" id="town" />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input type="text" id="country" />
                </div>
                <div className="form-group">
                  <label>
                    Phone <span>*</span>
                  </label>
                  <input type="tel" id="phone" />
                </div>
                <div className="form-group">
                  <label>
                    Email Address <span>*</span>
                  </label>
                  <input type="email" id="email" />
                </div>
                <div className="form-group input-group">
                  <input type="checkbox" id="checkbox1" name="account-create" />
                  <label htmlFor="checkbox1">Create an account</label>
                </div>
                <div className="form-group different-shipping">
                  <div className="toggle-bar">
                    <input
                      type="checkbox"
                      id="checkbox2"
                      name="different-ship"
                    />
                    <label for="checkbox2">Ship to a different address?</label>
                  </div>
                  <div className="toggle-open">
                    <div className="form-group">
                      <label>
                        Country/ Region <span>*</span>
                      </label>
                      <select id="Region">
                        <option value="3">Australia</option>
                        <option value="4">England</option>
                        <option value="6">New Zealand</option>
                        <option value="5">Switzerland</option>
                        <option value="1">United Kingdom (UK)</option>
                        <option value="2">United States (USA)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>
                        Street Address <span>*</span>
                      </label>
                      <input
                        type="text"
                        id="address1"
                        className="mb--15"
                        placeholder="House number and street name"
                      />
                      <input
                        type="text"
                        id="address2"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Town/ City <span>*</span>
                      </label>
                      <input type="text" id="town" />
                    </div>
                    <div className="form-group">
                      <label>Country</label>
                      <input type="text" id="country" />
                    </div>
                    <div className="form-group">
                      <label>
                        Phone <span>*</span>
                      </label>
                      <input type="tel" id="phone" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Other Notes (optional)</label>
                  <textarea
                    id="notes"
                    rows="2"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="axil-order-summery order-checkout-summery">
                <h5 className="title mb--20">Your Order</h5>
                <div className="summery-table-wrap">
                  <table className="table summery-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="order-product">
                        <td>
                          Commodo Blown Lamp{" "}
                          <span className="quantity">x1</span>
                        </td>
                        <td>$117.00</td>
                      </tr>
                      <tr className="order-product">
                        <td>
                          Commodo Blown Lamp{" "}
                          <span className="quantity">x1</span>
                        </td>
                        <td>$198.00</td>
                      </tr>
                      <tr className="order-subtotal">
                        <td>Subtotal</td>
                        <td>$117.00</td>
                      </tr>
                      <tr className="order-shipping">
                        <td colSpan="2">
                          <div className="shipping-amount">
                            <span className="title">Shipping Method</span>
                            <span className="amount">$35.00</span>
                          </div>
                          <div className="input-group">
                            <input
                              type="radio"
                              id="radio1"
                              name="shipping"
                              value="Free Shipping"
                              checked={
                                selectedShippingMethod === "Free Shipping"
                              }
                              onChange={handleShippingMethodChange}
                            />
                            <label htmlFor="radio1">Free Shipping</label>
                          </div>
                          <div className="input-group">
                            <input
                              type="radio"
                              id="radio2"
                              name="shipping"
                              value="Local"
                              checked={selectedShippingMethod === "Local"}
                              onChange={handleShippingMethodChange}
                            />
                            <label htmlFor="radio2">Local</label>
                          </div>
                          <div className="input-group">
                            <input
                              type="radio"
                              id="radio3"
                              name="shipping"
                              value="Flat rate"
                              checked={selectedShippingMethod === "Flat rate"}
                              onChange={handleShippingMethodChange}
                            />
                            <label htmlFor="radio3">Flat rate</label>
                          </div>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <td>Total</td>
                        <td className="order-total-amount">$323.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="order-payment-method">
                  <div className="single-payment">
                    <div className="input-group">
                      <input type="radio" id="radio4" name="payment" />
                      <label htmlFor="radio4">Direct bank transfer</label>
                    </div>
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                  <div className="single-payment">
                    <div className="input-group">
                      <input type="radio" id="radio5" name="payment" />
                      <label htmlFor="radio5">Cash on delivery</label>
                    </div>
                    <p>Pay with cash upon delivery.</p>
                  </div>
                  <div className="single-payment">
                    <div className="input-group justify-content-between align-items-center">
                      <input type="radio" id="radio6" name="payment" />
                      <label htmlFor="radio6">Paypal</label>
                      <img
                        src="assets/images/others/payment.png"
                        alt="Paypal payment"
                      />
                    </div>
                    <p>
                      Pay via PayPal; you can pay with your credit card if you
                      don’t have a PayPal account.
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="axil-btn btn-bg-primary checkout-btn"
                >
                  Process to Checkout
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Checkout;
