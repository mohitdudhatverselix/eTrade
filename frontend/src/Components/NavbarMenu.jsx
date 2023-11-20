import React from "react";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <>
      <div id="axil-sticky-placeholder"></div>
      <div className="axil-mainmenu">
        <div className="container">
          <div className="header-navbar">
            <div className="header-brand">
              <Link to="/index.html" className="logo logo-dark">
                <img src="/assets/images/logo/logo.png" alt="Site Logo" />
              </Link>
              <Link to="/index.html" className="logo logo-light">
                <img src="/assets/images/logo/logo-light.png" alt="Site Logo" />
              </Link>
            </div>
            <div className="header-main-nav">
              <nav className="mainmenu-nav">
                <button className="mobile-close-btn mobile-nav-toggler">
                  <i className="fas fa-times"></i>
                </button>
                <div className="mobile-nav-brand">
                  <Link to="/index.html" className="logo">
                    <img src="assets/images/logo/logo.png" alt="Site Logo" />
                  </Link>
                </div>
                <ul className="mainmenu">
                  <li>
                    <Link to="/#">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop.html">Shop</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/#">Categories</Link>
                    <ul className="axil-submenu">
                      <li>
                        <Link to="/wishlist.html">Wishlist</Link>
                      </li>
                      <li>
                        <Link to="/cart.html">Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout.html">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/my-account.html">Account</Link>
                      </li>
                      <li>
                        <Link to="/sign-up.html">Sign Up</Link>
                      </li>
                      <li>
                        <Link to="/sign-in.html">Sign In</Link>
                      </li>
                      <li>
                        <Link to="/forgot-password.html">Forgot Password</Link>
                      </li>
                      <li>
                        <Link to="/reset-password.html">Reset Password</Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy.html">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/coming-soon.html">Coming Soon</Link>
                      </li>
                      <li>
                        <Link to="/error-page.html">404 Error</Link>
                      </li>
                      <li>
                        <Link to="/typography.html">Typography</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/about-us.html">About</Link>
                  </li>
                  <li>
                    <Link to="/contact.html">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-action">
              <ul className="action-list">
                <li className="axil-search">
                  <Link className="header-search-icon" title="Search">
                    <i className="flaticon-magnifying-glass"></i>
                  </Link>
                </li>
                <li className="wishlist">
                  <Link to="/wishlist.html">
                    <i className="flaticon-heart"></i>
                  </Link>
                </li>
                <li className="shopping-cart">
                  <Link to="/#" className="cart-dropdown-btn">
                    <span className="cart-count">3</span>
                    <i className="flaticon-shopping-cart"></i>
                  </Link>
                </li>
                <li className="my-account">
                  <Link to="/">
                    <i className="flaticon-person"></i>
                  </Link>
                  <div className="my-account-dropdown">
                    <span className="title">QUICKLINKS</span>
                    <ul>
                      <li>
                        <Link to="/my-account.html">My Account</Link>
                      </li>
                      <li>
                        <Link to="/#">Initiate return</Link>
                      </li>
                      <li>
                        <Link to="/#">Support</Link>
                      </li>
                      <li>
                        <Link to="/#">Language</Link>
                      </li>
                    </ul>
                    <div className="login-btn">
                      <Link
                        to="/sign-in.html"
                        className="axil-btn btn-bg-primary"
                      >
                        Login
                      </Link>
                    </div>
                    <div className="reg-footer text-center">
                      No account yet?
                      <Link to="/sign-up.html" className="btn-link">
                        REGISTER HERE.
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="axil-mobile-toggle">
                  <button className="menu-btn mobile-nav-toggler">
                    <i className="flaticon-menu-2"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarMenu;
