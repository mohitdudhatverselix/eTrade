import React from "react";

const AboutFeatures = () => {
  return (
    <div className="axil-about-area about-style-2" style={{ padding: "80px" }}>
      <div className="container">
        <div className="row align-items-center mb--80 mb_sm--60">
          <div className="col-lg-5">
            <div className="about-thumbnail">
              <img src="assets/images/about/about-02.png" alt="about" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-content content-right">
              <span className="subtitle">Features #01</span>
              <h4 className="title">Solutions that work together</h4>
              <p>
                Publish your eCommerce site quickly with our easy-to-use store
                builder— no coding required. Migrate your items from your point
                of sale system or turn your Instagram feed into a shopping site
                and start selling fast. Square Online works for all kinds of
                businesses—retail, restaurants, services.
              </p>
              <a href="contact.html" className="axil-btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 order-lg-2">
            <div className="about-thumbnail">
              <img src="assets/images/about/about-03.png" alt="about" />
            </div>
          </div>
          <div className="col-lg-7 order-lg-1">
            <div className="about-content content-left">
              <span className="subtitle">Features #01</span>
              <h4 className="title">Solutions that work together</h4>
              <p>
                Publish your eCommerce site quickly with our easy-to-use store
                builder— no coding required. Migrate your items from your point
                of sale system or turn your Instagram feed into a shopping site
                and start selling fast. Square Online works for all kinds of
                businesses—retail, restaurants, services.
              </p>
              <a href="contact.html" className="axil-btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutFeatures;
