import React from "react";
import { Link } from "react-router-dom";

const supportData = {
  email: "example@domain.com",
  phone: "(+01) 850-315-5862",
};

const accountLinks = [
  { text: "My Account", link: "my-account.html" },
  { text: "Login / Register", link: "sign-up.html" },
  { text: "Cart", link: "cart.html" },
  { text: "Wishlist", link: "wishlist.html" },
  { text: "Shop", link: "shop.html" },
];

const quickLinks = [
  { text: "Privacy Policy", link: "privacy-policy.html" },
  { text: "Terms Of Use", link: "terms-of-service.html" },
  { text: "FAQ", link: "/" },
  { text: "Contact", link: "contact.html" },
];

const Footer = () => {
  return (
    <footer className="axil-footer-area footer-style-2">
      <div className="footer-top separator-top">
        <div className="container">
          <div className="row" style={{ textAlign: "left" }}>
            <div className="col-lg-3 col-sm-6">
              <div className="axil-footer-widget">
                <h5 className="widget-title">Support</h5>

                <div className="inner">
                  <p>
                    685 Market Street, <br />
                    Las Vegas, LA 95820, <br />
                    United States.
                  </p>
                  <ul className="support-list-item">
                    <li>
                      <Link to={`mailto:${supportData.email}`}>
                        <i className="fal fa-envelope-open"></i>
                        {supportData.email}
                      </Link>
                    </li>
                    <li>
                      <Link to={`tel:${supportData.phone}`}>
                        <i className="fal fa-phone-alt"></i> {supportData.phone}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="axil-footer-widget">
                <h5 className="widget-title">Account</h5>
                <div className="inner">
                  <ul>
                    {accountLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.link}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="axil-footer-widget">
                <h5 className="widget-title">Quick Link</h5>
                <div className="inner">
                  <ul>
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <Link to={link.link}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="axil-footer-widget">
                <h5 className="widget-title">Download App</h5>
                <div className="inner">
                  <span>Save $3 With App & New User only</span>
                  <div className="download-btn-group">
                    <div className="qr-code">
                      <img src="assets/images/others/qr.png" alt="Axilthemes" />
                    </div>
                    <div className="app-link">
                      <Link to="/">
                        <img
                          src="assets/images/others/app-store.png"
                          alt="App Store"
                        />
                      </Link>
                      <Link to="/">
                        <img
                          src="assets/images/others/play-store.png"
                          alt="Play Store"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area copyright-default separator-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="social-share">
                <Link to="/">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-discord"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="copyright-left d-flex flex-wrap justify-content-center">
                <ul className="quick-link">
                  <li>
                    © 2023. All rights reserved by{" "}
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href="https://axilthemes.com/"
                    >
                      Axilthemes
                    </Link>
                    .
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="copyright-right d-flex flex-wrap justify-content-xl-end justify-content-center align-items-center">
                <span className="card-text">Accept For</span>
                <ul className="payment-icons-bottom quick-link">
                  <li>
                    <img
                      src="assets/images/icons/cart/cart-1.png"
                      alt="paypal cart"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/icons/cart/cart-2.png"
                      alt="paypal cart"
                    />
                  </li>
                  <li>
                    <img
                      src="assets/images/icons/cart/cart-5.png"
                      alt="paypal cart"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;